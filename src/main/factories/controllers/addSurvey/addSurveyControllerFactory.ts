import { Controller } from '../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../decorators/logControllerDecoratorFactory'
import { AddSurveyController } from '../../../../presentation/controllers/survay/addSurvay/addSurveyController'
import { MakeAddSurveyValidation } from './addSurveyValidationFactory'
import { makeDbAddSurvey } from '../../usecases/addSurvey/dbAddSurveyFactory'

export const MakeAddSurveyController = (): Controller => {
  const controller = new AddSurveyController(MakeAddSurveyValidation(), makeDbAddSurvey())
  return makeLogControllerDecorator(controller)
}
