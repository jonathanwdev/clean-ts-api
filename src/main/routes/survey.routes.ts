import { Router } from 'express'
import { adaptRoute } from '../adapters/expressRouteAdapter'
import { MakeAddSurveyController } from '../factories/controllers/survey/addSurvey/addSurveyControllerFactory'
import { MakeAuthMiddleware } from '../factories/middleware/authMiddlewareFactory'
import { adaptMiddleware } from '../adapters/expressMiddlewareAdapter'

export default (router: Router): void => {
  const adminAuth = adaptMiddleware(MakeAuthMiddleware('admin'))
  router.post('/surveys', adminAuth, adaptRoute(MakeAddSurveyController()))
}
