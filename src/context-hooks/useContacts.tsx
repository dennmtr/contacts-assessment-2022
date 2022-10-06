import React from 'react'
import { fetchList } from 'src/context-hooks/actions/contacts'
import { TUser } from 'src/structures/User'

interface IState {
  fetchContacts: () => Promise<TUser[]>
  contacts: TUser[]
}

const ContactContext = React.createContext<IState>({} as IState)

interface IContactProvider {
  children?: React.ReactNode
}

const ContactProvider: React.FC<Partial<IContactProvider>> = ({ children }) => {
  const [contacts, setContacts] = React.useState<TUser[]>([])
  const [loading, setLoading] = React.useState<boolean>(false)
  const fetchContacts = React.useCallback(async () => {
    setLoading(true)
    try {
      const data = await fetchList()
      setContacts(data)
      return Promise.resolve(data)
    } catch (error: unknown) {
      setContacts([])
      return Promise.reject(error)
    } finally {
      setLoading(false)
    }
  }, [])
  const memoedValue = React.useMemo(
    () => ({
      contacts,
      loading,
      fetchContacts
    }),
    [contacts, loading]
  )
  return <ContactContext.Provider value={memoedValue}>{children}</ContactContext.Provider>
}

export { ContactProvider }

const useContacts = () => React.useContext(ContactContext)

export default useContacts
