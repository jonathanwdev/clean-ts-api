import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/logControllerDecoratorFactory'
import { LoadSurveysController } from '../../../../../presentation/controllers/survay/loadSurveys/loadSurveysController'
import { makeDbLoadSurvey } from '../../../usecases/survey/loadSurveys/dbLoadSurveys'

export const MakeLoadSurveysController = (): Controller => {
  const controller = new LoadSurveysController(makeDbLoadSurvey())
  return makeLogControllerDecorator(controller)
}
