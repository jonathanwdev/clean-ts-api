import { AddSurveyModel } from '../../../../domains/usecases/addSurvey'

export interface AddSurveyRepository {
  add: (surveyData: AddSurveyModel) => Promise<void>
}
