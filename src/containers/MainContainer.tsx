import React from 'react'
import Contact from 'src/components-domain/Contact/Contact'
import GridItem from 'src/components/GridItem/GridItem.styled'
import GridRow from 'src/components/GridRow/GridRow.styled'
import useContacts from 'src/context-hooks/useContacts'
import useModal from 'src/context-hooks/useModal'

const MainContainer: React.FC = () => {
  const { contacts, fetchContacts } = useContacts()
  const { showContact } = useModal()
  const handleClick = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (id: number) => (_e: React.MouseEvent<HTMLButtonElement>) => {
      const user = contacts.find(user => user.id === id)
      if (!user) return
      showContact(user).then(reason => console.log(reason))
    },
    [contacts]
  )
  React.useEffect(() => {
    fetchContacts()
  }, [])
  return (
    <GridRow component="section" mh={420}>
      {contacts.map(user => (
        <GridItem component="article" key={user.id} md={6} xl={4}>
          <Contact user={user} onClick={handleClick(user.id)} />
        </GridItem>
      ))}
    </GridRow>
  )
}

export default MainContainer
