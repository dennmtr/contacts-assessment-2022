import React from 'react'
import MagniIcon from 'src/components-domain/Icons/MagniIcon'
import Card from 'src/components/Card/Card.styled'
import DescriptionList from 'src/components/DescriptionList/DescriptionList'
import Typography from 'src/components/Typography/Typography.styled'
import { TUser } from 'src/structures/User'

interface IContact {
  user?: TUser
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Contact: React.FC<IContact> = ({ user, onClick }) => {
  return (
    <Card>
      <Typography variant="h3">{user?.name || 'user.name'}</Typography>
      <DescriptionList
        data={[
          ['Company', user?.company.name || 'user.company.name'],
          ['E-mail', user?.email || 'user.email']
        ]}
      />
      <MagniIcon onClick={onClick} mlAuto />
    </Card>
  )
}

export default Contact
