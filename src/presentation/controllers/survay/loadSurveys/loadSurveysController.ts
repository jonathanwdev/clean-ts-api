import { LoadSurveys, HttpRequest, HttpResponse } from './loadSurveysControllerProtocols'
import { Controller } from '../../../protocols'

export class LoadSurveysController implements Controller {
  constructor (
    private readonly loadSurveys: LoadSurveys
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    await this.loadSurveys.load()
    return null
  }
}
