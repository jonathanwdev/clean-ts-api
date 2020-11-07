import { MakeSignUpValidation } from './signupValidationFactory'
import { SignUpController } from '@/presentation/controllers/sign/signup/signupController'
import { Controller } from '@/presentation/protocols'
import { makeDbAuthentication } from '@/main/factories/usecases/account/authentication/dbAuthenticationFactory'
import { makeDbAddAccount } from '@/main/factories/usecases/account/addAccount/dbAddAccountFactory'
import { makeLogControllerDecorator } from '@/main/factories/decorators/logControllerDecoratorFactory'

export const MakeSignUpController = (): Controller => {
  const controller = new SignUpController(makeDbAddAccount(), MakeSignUpValidation(), makeDbAuthentication())
  return makeLogControllerDecorator(controller)
}
