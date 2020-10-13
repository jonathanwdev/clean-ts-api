import { AccountModel } from '../../domains/models/account'

export interface LoadAccountByEmailRepository {
  load: (email: string) => Promise<AccountModel>
}
