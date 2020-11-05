import { LoadSurveys, HttpRequest, HttpResponse } from './loadSurveysControllerProtocols'
import { Controller } from '../../../protocols'
import { ok } from '../../../helpers/http/httpHelper'

export class LoadSurveysController implements Controller {
  constructor (
    private readonly loadSurveys: LoadSurveys
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const surveys = await this.loadSurveys.load()
    return ok(surveys)
  }
}
