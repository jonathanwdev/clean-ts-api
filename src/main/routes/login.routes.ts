import { Router } from 'express'
import { adaptRoute } from '../adapters/express/expressRouteAdapter'
import { MakeSignUpController } from '../factories/controllers/signup/signupControllerFactory'
import { MakeLoginController } from '../factories/controllers/login/loginControllerFactory'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(MakeSignUpController()))
  router.post('/login', adaptRoute(MakeLoginController()))
}
