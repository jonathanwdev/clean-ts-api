import { SurveyModel } from '../../../domains/models/survey'
import { LoadSurveys } from '../../../domains/usecases/loadSurveys'
import { LoadSurveysRepository } from '../../protocols/db/survey/loadSurveyRepository'

export class DbLoadSurveys implements LoadSurveys {
  constructor (
    private readonly loadSurveysRepository: LoadSurveysRepository
  ) {}

  async load (): Promise<SurveyModel[]> {
    const surveys = await this.loadSurveysRepository.loadAll()
    return surveys
  }
}
