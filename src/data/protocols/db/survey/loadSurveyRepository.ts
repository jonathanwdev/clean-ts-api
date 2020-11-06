import { SurveyModel } from '../../../../domains/models/survey'

export interface LoadSurveysRepository {
  loadAll: () => Promise<SurveyModel[]>
}
