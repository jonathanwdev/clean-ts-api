import { Controller, HttpRequest, HttpResponse, Validation } from './addSurveyControllerProtocols'

export class AddSurveyController implements Controller {
  constructor (
    private readonly validation: Validation
  ) { }

  public async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    this.validation.validate(httpRequest.body)
    return new Promise(resolve => resolve(null))
  }
}
