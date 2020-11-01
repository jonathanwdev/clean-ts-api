import { forbidden } from '../helpers/http/httpHelper'
import { AccessDeniedError } from '../errors'
import { AuthMiddleware } from './authMiddleware'

describe('Auth Middleware', () => {
  test('Should return 403 if no x-access-token exists in headers', async () => {
    const sut = new AuthMiddleware()
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(forbidden(new AccessDeniedError()))
  })
})