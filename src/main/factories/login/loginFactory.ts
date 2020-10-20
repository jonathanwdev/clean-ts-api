import env from '../../config/env'
import { Controller } from '../../../presentation/protocols'
import { MakeLoginValidation } from './loginValidationFactory'
import { LoginController } from '../../../presentation/controllers/login/loginController'
import { LogControllerDecorator } from '../../decorators/logControllerDecorator'
import { DbAuthentication } from '../../../data/usecases/authentication/dbAuthentication'
import { LogMongoRepository } from '../../../infra/db/mongodb/log/logMongoRepoitory'
import { AccountMongoRepository } from '../../../infra/db/mongodb/account/accountMongoRepository'
import { BcryptAdapter } from '../../../infra/criptography/bcryptAdapter/bcryptAdapter'
import { JwtAdapter } from '../../../infra/criptography/jwtAdapter/jwtAdpter'

export const MakeLoginController = (): Controller => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const accountMongoRepository = new AccountMongoRepository()
  const dbAuth = new DbAuthentication(accountMongoRepository, bcryptAdapter, jwtAdapter, accountMongoRepository)
  const loginController = new LoginController(dbAuth, MakeLoginValidation())
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(loginController, logMongoRepository)
}
