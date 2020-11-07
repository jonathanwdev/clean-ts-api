import { LoadSurveys, HttpRequest, HttpResponse } from './loadSurveysControllerProtocols'
import { Controller } from '@/presentation/protocols'
import { noContent, ok, serverError } from '@/presentation/helpers/http/httpHelper'

export class LoadSurveysController implements Controller {
  constructor (
    private readonly loadSurveys: LoadSurveys
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const surveys = await this.loadSurveys.load()
      return surveys.length ? ok(surveys) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
