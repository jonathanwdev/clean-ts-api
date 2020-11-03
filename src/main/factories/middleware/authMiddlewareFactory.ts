import { AuthMiddleware } from '../../../presentation/middlewares/authMiddleware'
import { Middleware } from '../../../presentation/protocols'
import { makeDbLoadAccountByToken } from '../usecases/account/loadAccountByToken/dbLoadAccountByTokenFactory'

export const MakeAuthMiddleware = (role?: string): Middleware => {
  return new AuthMiddleware(makeDbLoadAccountByToken(), role)
}
