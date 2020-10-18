import { AddAccountRepository } from '../../../../data/protocols/db/addAccountRepository'
import { LoadAccountByEmailRepository } from '../../../../data/protocols/db/loadAccountByEmailRepository'
import { UpdateAccessTokenRepository } from '../../../../data/protocols/db/updateAccessTokenRepository'
import { AccountModel } from '../../../../domains/models/account'
import { AddAccountModel } from '../../../../domains/usecases/addAccount'
import { MongoHelper } from '../helpers/mongoHelper'

export class AccountMongoRepository implements AddAccountRepository, LoadAccountByEmailRepository, UpdateAccessTokenRepository {
  public async add (accountModel: AddAccountModel): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountModel)
    return MongoHelper.map(result.ops[0])
  }

  public async loadByEmail (email: string): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({ email })
    return account && MongoHelper.map(account)
  }

  public async updateAccessToken (id: string, token: string): Promise<void> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.updateOne(
      { _id: id },
      {
        $set: {
          accessToken: token
        }
      }
    )
  }
}
