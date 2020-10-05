import { SignUpController } from '../../presentation/controllers/signup/signup'
import { EmailValidatorAdapter } from '../../util/emailValidatorAdapter'
import { DbAddAccount } from '../../data/usecases/addAccount/dbAddAccount'
import { BcryptAdapter } from '../../infra/criptography/bcryptAdapter'
import { AccountMongoRepository } from '../../infra/db/mongodb/accountRepository/account'
import { LogMongoRepository } from '../../infra/db/mongodb/logRepoitory/log'
import { LogControllerDecorator } from '../decorators/log'
import { Controller } from '../../presentation/protocols'

export const MakeSignUpController = (): Controller => {
  const salt = 12

  const accountRepository = new AccountMongoRepository()
  const encrypter = new BcryptAdapter(salt)
  const addAccount = new DbAddAccount(encrypter, accountRepository)
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const signUpController = new SignUpController(emailValidatorAdapter, addAccount)
  const logMongoRrepository = new LogMongoRepository()
  return new LogControllerDecorator(signUpController, logMongoRrepository)
}
