import { DbAddAccount } from '@/data/usecases/addAccount/dbAddAccount'
import { BcryptAdapter } from '@/infra/criptography/bcryptAdapter/bcryptAdapter'
import { AccountMongoRepository } from '@/infra/db/mongodb/account/accountMongoRepository'
import { AddAccount } from '@/domains/usecases/addAccount'

export const makeDbAddAccount = (): AddAccount => {
  const salt = 12
  const accountRepository = new AccountMongoRepository()
  const hasher = new BcryptAdapter(salt)
  const LoadAccountByEmailRepository = new AccountMongoRepository()
  return new DbAddAccount(hasher, accountRepository, LoadAccountByEmailRepository)
}
