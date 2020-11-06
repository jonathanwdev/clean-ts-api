import { adaptMiddleware } from '../adapters/expressMiddlewareAdapter'
import { MakeAuthMiddleware } from '../factories/middleware/authMiddlewareFactory'

export const adminAuth = adaptMiddleware(MakeAuthMiddleware('admin'))
