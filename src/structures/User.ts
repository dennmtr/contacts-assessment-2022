import { TAddress } from 'src/structures/Address'
import { TCompany } from 'src/structures/Company'

export type TUser = {
  address: TAddress
  company: TCompany
  email: string
  id: number
  name: string
  phone: string
  website: string
  username: string
}
