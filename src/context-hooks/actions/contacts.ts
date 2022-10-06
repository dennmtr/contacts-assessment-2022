import http from 'src/services/http'
import { TUser } from 'src/structures/User'

export const fetchList = async (): Promise<TUser[]> => {
  try {
    const res = await http.get<TUser[]>(`/users?_start=0&_limit=6`)
    return Promise.resolve(res.data)
  } catch (error) {
    return Promise.reject(error)
  }
}
