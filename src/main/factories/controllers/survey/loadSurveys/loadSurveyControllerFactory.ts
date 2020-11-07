import { Controller } from '@/presentation/protocols'
import { LoadSurveysController } from '@/presentation/controllers/survey/loadSurveys/loadSurveysController'
import { makeLogControllerDecorator } from '@/main/factories/decorators/logControllerDecoratorFactory'
import { makeDbLoadSurvey } from '@/main/factories/usecases/survey/loadSurveys/dbLoadSurveys'

export const MakeLoadSurveysController = (): Controller => {
  const controller = new LoadSurveysController(makeDbLoadSurvey())
  return makeLogControllerDecorator(controller)
}
