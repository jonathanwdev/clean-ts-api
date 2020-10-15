import { AddAccountRepository } from '../../../../data/protocols/db/addAccountRepository'
import { AccountModel } from '../../../../domains/models/account'
import { AddAccountModel } from '../../../../domains/usecases/addAccount'
import { MongoHelper } from '../helpers/mongoHelper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountModel: AddAccountModel): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountModel)
    return MongoHelper.map(result.ops[0])
  }
}
