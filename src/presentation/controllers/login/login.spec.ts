import { badRequest } from '../../helpers/httpHelper'
import { MissingParamError } from '../../errors'
import { LoginController } from './login'

describe('LoginController', () => {
  test('should return 400 if no email is provided ', async () => {
    const sut = new LoginController()
    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('email')))
  })
})