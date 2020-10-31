import { badRequest } from '../../../helpers/http/httpHelper'
import { Controller, HttpRequest, HttpResponse, Validation, AddSurvey } from './addSurveyControllerProtocols'

export class AddSurveyController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addSurvey: AddSurvey
  ) {}

  public async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest.body)
    if (error) {
      return badRequest(error)
    }

    const { question, answers } = httpRequest.body

    await this.addSurvey.add({
      answers,
      question
    })

    return null
  }
}
