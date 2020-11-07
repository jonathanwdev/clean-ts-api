import { MakeAddSurveyValidation } from './addSurveyValidationFactory'
import { Controller } from '@/presentation/protocols'
import { AddSurveyController } from '@/presentation/controllers/survey/addSurvay/addSurveyController'
import { makeLogControllerDecorator } from '@/main/factories/decorators/logControllerDecoratorFactory'
import { makeDbAddSurvey } from '@/main/factories/usecases/survey/addSurvey/dbAddSurveyFactory'

export const MakeAddSurveyController = (): Controller => {
  const controller = new AddSurveyController(MakeAddSurveyValidation(), makeDbAddSurvey())
  return makeLogControllerDecorator(controller)
}
