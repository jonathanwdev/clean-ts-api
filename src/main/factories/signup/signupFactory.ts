import { SignUpController } from '../../../presentation/controllers/signup/signupController'
import { DbAddAccount } from '../../../data/usecases/addAccount/dbAddAccount'
import { BcryptAdapter } from '../../../infra/criptography/bcryptAdapter/bcryptAdapter'
import { AccountMongoRepository } from '../../../infra/db/mongodb/account/accountMongoRepository'
import { LogMongoRepository } from '../../../infra/db/mongodb/log/logMongoRepoitory'
import { LogControllerDecorator } from '../../decorators/logControllerDecorator'
import { Controller } from '../../../presentation/protocols'
import { MakeSignUpValidation } from './signupValidationFactory'

export const MakeSignUpController = (): Controller => {
  const salt = 12
  const accountRepository = new AccountMongoRepository()
  const hasher = new BcryptAdapter(salt)
  const addAccount = new DbAddAccount(hasher, accountRepository)
  const signUpController = new SignUpController(addAccount, MakeSignUpValidation())
  const logMongoRrepository = new LogMongoRepository()
  return new LogControllerDecorator(signUpController, logMongoRrepository)
}
