import { badRequest } from '../../../helpers/http/httpHelper'
import { Controller, HttpRequest, HttpResponse, Validation } from './addSurveyControllerProtocols'

export class AddSurveyController implements Controller {
  constructor (
    private readonly validation: Validation
  ) { }

  public async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest.body)
    if (error) {
      return badRequest(error)
    }
    return new Promise(resolve => resolve(null))
  }
}
