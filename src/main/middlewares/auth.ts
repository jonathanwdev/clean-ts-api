import { adaptMiddleware } from '../adapters/expressMiddlewareAdapter'
import { MakeAuthMiddleware } from '../factories/middleware/authMiddlewareFactory'

export const auth = adaptMiddleware(MakeAuthMiddleware())
