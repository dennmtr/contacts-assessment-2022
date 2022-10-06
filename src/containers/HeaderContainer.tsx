import Container from 'src/components/Container/Container.styled'
import Typography from 'src/components/Typography/Typography.styled'

const HeaderContainer = () => (
  <Container textCenter size="sm">
    <Typography variant="h1">CSS, Javascript, API</Typography>
    <Typography variant="h2">Contacts Appication</Typography>
    <Typography>
      View basic info of contacts in a 3x2 layout. Click on the magnifier icon to open a modal and
      view detailed contact info contact
    </Typography>
  </Container>
)

export default HeaderContainer
