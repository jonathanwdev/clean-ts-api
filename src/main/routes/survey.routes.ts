import { Router } from 'express'
import { adaptRoute } from '../adapters/expressRouteAdapter'
import { MakeAddSurveyController } from '../factories/controllers/survey/addSurvey/addSurveyControllerFactory'
import { MakeAuthMiddleware } from '../factories/middleware/authMiddlewareFactory'
import { adaptMiddleware } from '../adapters/expressMiddlewareAdapter'
import { MakeLoadSurveysController } from '../factories/controllers/survey/loadSurveys/loadSurveyControllerFactory'

export default (router: Router): void => {
  const adminAuth = adaptMiddleware(MakeAuthMiddleware('admin'))
  const auth = adaptMiddleware(MakeAuthMiddleware())
  router.post('/surveys', adminAuth, adaptRoute(MakeAddSurveyController()))
  router.get('/surveys', auth, adaptRoute(MakeLoadSurveysController()))
}
