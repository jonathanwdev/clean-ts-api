import { AccountModel } from '../../../domains/models/account'

export interface LoadAccountByEmailRepository {
  loadByEmail: (email: string) => Promise<AccountModel>
}
