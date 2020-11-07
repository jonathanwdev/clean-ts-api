import { MakeLoginValidation } from './loginValidationFactory'
import { Controller } from '@/presentation/protocols'
import { LoginController } from '@/presentation/controllers/sign/login/loginController'
import { makeDbAuthentication } from '@/main/factories/usecases/account/authentication/dbAuthenticationFactory'
import { makeLogControllerDecorator } from '@/main/factories/decorators/logControllerDecoratorFactory'

export const MakeLoginController = (): Controller => {
  const controller = new LoginController(makeDbAuthentication(), MakeLoginValidation())
  return makeLogControllerDecorator(controller)
}
