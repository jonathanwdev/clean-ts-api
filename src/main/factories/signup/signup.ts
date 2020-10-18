import { SignUpController } from '../../../presentation/controllers/signup/signup'
import { DbAddAccount } from '../../../data/usecases/addAccount/dbAddAccount'
import { BcryptAdapter } from '../../../infra/criptography/bcryptAdapter'
import { AccountMongoRepository } from '../../../infra/db/mongodb/accountRepository/account'
import { LogMongoRepository } from '../../../infra/db/mongodb/logRepoitory/log'
import { LogControllerDecorator } from '../../decorators/log'
import { Controller } from '../../../presentation/protocols'
import { MakeSignUpValidation } from './signupValidation'

export const MakeSignUpController = (): Controller => {
  const salt = 12
  const accountRepository = new AccountMongoRepository()
  const hasher = new BcryptAdapter(salt)
  const addAccount = new DbAddAccount(hasher, accountRepository)
  const signUpController = new SignUpController(addAccount, MakeSignUpValidation())
  const logMongoRrepository = new LogMongoRepository()
  return new LogControllerDecorator(signUpController, logMongoRrepository)
}
