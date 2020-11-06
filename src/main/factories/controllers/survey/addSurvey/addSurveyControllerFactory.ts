import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/logControllerDecoratorFactory'
import { AddSurveyController } from '../../../../../presentation/controllers/survey/addSurvay/addSurveyController'
import { MakeAddSurveyValidation } from './addSurveyValidationFactory'
import { makeDbAddSurvey } from '../../../usecases/survey/addSurvey/dbAddSurveyFactory'

export const MakeAddSurveyController = (): Controller => {
  const controller = new AddSurveyController(MakeAddSurveyValidation(), makeDbAddSurvey())
  return makeLogControllerDecorator(controller)
}
