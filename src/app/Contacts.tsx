import GlobalStyles from 'src/app/Contacts.styled'
import Container from 'src/components/Container/Container.styled'
import FooterContainer from 'src/containers/FooterContainer'
import HeaderContainer from 'src/containers/HeaderContainer'
import MainContainer from 'src/containers/MainContainer'
import { ContactProvider } from 'src/context-hooks/useContacts'
import { ModalProvider } from 'src/context-hooks/useModal'
import { defaultTheme } from 'src/theme/theme'
import { ThemeProvider } from 'styled-components'

const Contacts = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    <Container>
      <header>
        <HeaderContainer />
      </header>
      <main>
        <ModalProvider>
          <ContactProvider>
            <MainContainer />
          </ContactProvider>
        </ModalProvider>
      </main>
      <footer>
        <FooterContainer />
      </footer>
    </Container>
  </ThemeProvider>
)

export default Contacts
