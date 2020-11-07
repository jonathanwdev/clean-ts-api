import { SurveyMongoRepository } from '@/infra/db/mongodb/survey/surveyMongoRepository'
import { AddSurvey } from '@/domains/usecases/addSurvey'
import { DbAddSurvey } from '@/data/usecases/addSurvey/dbAddSurvey'

export const makeDbAddSurvey = (): AddSurvey => {
  const surveyRepository = new SurveyMongoRepository()
  return new DbAddSurvey(surveyRepository)
}
