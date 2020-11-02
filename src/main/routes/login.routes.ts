import { Router } from 'express'
import { adaptRoute } from '../adapters/expressRouteAdapter'
import { MakeSignUpController } from '../factories/controllers/login/signup/signupControllerFactory'
import { MakeLoginController } from '../factories/controllers/login/login/loginControllerFactory'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(MakeSignUpController()))
  router.post('/login', adaptRoute(MakeLoginController()))
}
