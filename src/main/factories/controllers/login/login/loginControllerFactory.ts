import { Controller } from '../../../../../presentation/protocols'
import { MakeLoginValidation } from './loginValidationFactory'
import { LoginController } from '../../../../../presentation/controllers/sign/login/loginController'
import { makeDbAuthentication } from '../../../usecases/account/authentication/dbAuthenticationFactory'
import { makeLogControllerDecorator } from '../../../decorators/logControllerDecoratorFactory'

export const MakeLoginController = (): Controller => {
  const controller = new LoginController(makeDbAuthentication(), MakeLoginValidation())
  return makeLogControllerDecorator(controller)
}
