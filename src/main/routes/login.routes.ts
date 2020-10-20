import { Router } from 'express'
import { adaptRoute } from '../adapters/express/expressRouteAdapter'
import { MakeSignUpController } from '../factories/signup/signupFactory'
import { MakeLoginController } from '../factories/login/loginFactory'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(MakeSignUpController()))
  router.post('/login', adaptRoute(MakeLoginController()))
}
