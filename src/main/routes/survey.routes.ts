import { Router } from 'express'
import { adaptRoute } from '../adapters/express/expressRouteAdapter'
import { MakeAddSurveyController } from '../factories/controllers/addSurvey/addSurveyControllerFactory'

export default (router: Router): void => {
  router.post('/surveys', adaptRoute(MakeAddSurveyController()))
}
