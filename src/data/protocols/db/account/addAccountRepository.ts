import { AddAccountModel } from '../../../../domains/usecases/addAccount'
import { AccountModel } from '../../../../domains/models/account'

export interface AddAccountRepository {
  add: (accountData: AddAccountModel) => Promise<AccountModel>
}
