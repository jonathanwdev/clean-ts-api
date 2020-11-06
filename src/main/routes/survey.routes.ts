import { Router } from 'express'
import { adaptRoute } from '../adapters/expressRouteAdapter'
import { MakeAddSurveyController } from '../factories/controllers/survey/addSurvey/addSurveyControllerFactory'
import { MakeLoadSurveysController } from '../factories/controllers/survey/loadSurveys/loadSurveyControllerFactory'
import { adminAuth } from '../middlewares/adminAuth'
import { auth } from '../middlewares/auth'

export default (router: Router): void => {
  router.post('/surveys', adminAuth, adaptRoute(MakeAddSurveyController()))
  router.get('/surveys', auth, adaptRoute(MakeLoadSurveysController()))
}
