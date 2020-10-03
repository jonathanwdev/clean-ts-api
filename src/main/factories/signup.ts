import { SignUpController } from '../../presentation/controllers/signup/signup'
import { EmailValidatorAdapter } from '../../util/emailValidatorAdapter'
import { DbAddAccount } from '../../data/usecases/addAccount/dbAddAccount'
import { BcryptAdapter } from '../../infra/criptography/bcryptAdapter'
import { AccountMongoRepository } from '../../infra/db/mongodb/accountRepository/account'

export const MakeSignUpController = (): SignUpController => {
  const salt = 12
  const accountRepository = new AccountMongoRepository()
  const encrypter = new BcryptAdapter(salt)
  const addAccount = new DbAddAccount(encrypter, accountRepository)
  const emailValidatorAdapter = new EmailValidatorAdapter()

  return new SignUpController(emailValidatorAdapter, addAccount)
}
