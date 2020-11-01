import { AccessDeniedError } from '../errors'
import { forbidden } from '../helpers/http/httpHelper'
import { Middleware, HttpRequest, HttpResponse } from '../protocols'

export class AuthMiddleware implements Middleware {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = forbidden(new AccessDeniedError())
    return new Promise((resolve) => resolve(error))
  }
}
