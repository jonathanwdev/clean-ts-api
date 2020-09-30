import { AddAccountRepository } from '../../../../data/protocols/addAccountRepository'
import { AccountModel } from '../../../../domains/models/account'
import { AddAccountModel } from '../../../../domains/usecases/addAccount'
import { MongoHelper } from '../helpers/mongoHelper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountModel: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountModel)
    const account = result.ops[0]
    const { _id, ...accountWithOutId } = account
    return Object.assign({}, accountWithOutId, { id: _id })
  }
}
