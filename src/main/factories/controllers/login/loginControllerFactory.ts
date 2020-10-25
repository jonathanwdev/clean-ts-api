import { Controller } from '../../../../presentation/protocols'
import { MakeLoginValidation } from './loginValidationFactory'
import { LoginController } from '../../../../presentation/controllers/login/loginController'
import { makeDbAuthentication } from '../../usecases/authentication/dbAuthenticationFactory'
import { makeLogControllerDecorator } from '../../decorators/logControllerDecoratorFactory'

export const MakeLoginController = (): Controller => {
  const controller = new LoginController(makeDbAuthentication(), MakeLoginValidation())
  return makeLogControllerDecorator(controller)
}
