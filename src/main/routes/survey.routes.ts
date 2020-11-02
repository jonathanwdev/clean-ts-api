import { Router } from 'express'
import { adaptRoute } from '../adapters/expressRouteAdapter'
import { MakeAddSurveyController } from '../factories/controllers/survey/addSurvey/addSurveyControllerFactory'

export default (router: Router): void => {
  router.post('/surveys', adaptRoute(MakeAddSurveyController()))
}
