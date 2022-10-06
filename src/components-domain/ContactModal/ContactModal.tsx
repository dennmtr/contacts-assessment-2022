import React from 'react'
import Box from 'src/components/Box/Box.styled'
import GridItem from 'src/components/GridItem/GridItem.styled'
import GridRow from 'src/components/GridRow/GridRow.styled'
import Modal from 'src/components/Modal/Modal'
import Typography from 'src/components/Typography/Typography.styled'
import { TUser } from 'src/structures/User'

interface IContactModal {
  user?: TUser
  onClose?: (reason: string) => void
  onTransitionEnd?: () => void
}
const ContactModal: React.FC<IContactModal> = ({ user, onClose, onTransitionEnd }) => {
  return (
    <Modal
      open={!!user}
      onClose={onClose}
      onTransitionEnd={onTransitionEnd}
      headerComponent={
        <>
          <Typography variant="modal.title" component="h3">
            {user?.name || 'user.name'}
          </Typography>
          <Typography variant="modal.subtitle" component="p">
            {user?.company.name || 'user.company.name'}
          </Typography>
        </>
      }>
      <Box paddingY={3} paddingX={5}>
        <GridRow>
          <GridItem md={3}>
            <Box paddingY={1} paddingX={1}>
              <Typography variant="contact.info.header" component="h4">
                Username:
              </Typography>
              <Typography variant="contact.info.description" component="p">
                {user?.username || 'user.username'}
              </Typography>
            </Box>
          </GridItem>
          <GridItem md={3}>
            <Box paddingY={1} paddingX={1}>
              <Typography variant="contact.info.header" component="h4">
                Address:
              </Typography>
              <Typography variant="contact.info.description" component="p">
                {user?.address.street || 'user.address.street'}
              </Typography>
              <Typography variant="contact.info.description" component="p">
                {user?.address.city || 'user.address.city'}
              </Typography>
              <Typography variant="contact.info.description" component="p">
                {user?.address.suite || 'user.address.suite'}
              </Typography>
            </Box>
          </GridItem>
          <GridItem md={3}>
            <Box paddingY={1} paddingX={1}>
              <Typography variant="contact.info.header" component="h4">
                Phone:
              </Typography>
              <Typography variant="contact.info.description" component="p">
                {user?.phone || 'user.phone'}
              </Typography>
            </Box>
          </GridItem>
          <GridItem md={3}>
            <Box paddingY={1} paddingX={1}>
              <Typography variant="contact.info.header" component="h4">
                Email:
              </Typography>
              <Typography variant="contact.info.description" component="p">
                {user?.email || 'user.email'}
              </Typography>
              <Typography variant="contact.info.header" component="h4">
                Website:
              </Typography>
              <Typography variant="contact.info.description" component="p">
                {user?.website || 'user.website'}
              </Typography>
            </Box>
          </GridItem>
        </GridRow>
      </Box>
    </Modal>
  )
}

export default ContactModal
