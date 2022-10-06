import React from 'react'
import ContactModal from 'src/components-domain/ContactModal/ContactModal'
import { TUser } from 'src/structures/User'

interface IState {
  children?: React.ReactNode
  showContact: (user: TUser) => Promise<string>
}

const ModalContext = React.createContext<IState>({} as IState)

interface IModalProvider {
  children?: React.ReactNode
}

const ModalProvider: React.FC<Partial<IModalProvider>> = ({ children }) => {
  const [user, setUser] = React.useState<TUser | undefined>(undefined)

  const awaitContactState = React.useRef<{
    resolve: (reason: string) => void
    reject: () => void
  } | null>(null)

  const showContact = (user: TUser): Promise<string> => {
    setUser(user)
    return new Promise((resolve, reject) => {
      awaitContactState.current = {
        resolve,
        reject
      }
    })
  }

  const resolveContactState = (reason: string) => {
    setUser(undefined)
    if (awaitContactState.current) awaitContactState.current.resolve(reason)
    awaitContactState.current = null
  }
  const handleContactModalClose = (reason: string) => resolveContactState(reason)

  const memoedValue = React.useMemo(() => ({ showContact }), [])

  return (
    <ModalContext.Provider value={memoedValue}>
      {children}
      <ContactModal user={user} onClose={handleContactModalClose} />
    </ModalContext.Provider>
  )
}

export { ModalProvider }

const useModal = () => React.useContext(ModalContext)

export default useModal
