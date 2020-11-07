import { SurveyMongoRepository } from '@/infra/db/mongodb/survey/surveyMongoRepository'
import { LoadSurveys } from '@/domains/usecases/loadSurveys'
import { DbLoadSurveys } from '@/data/usecases/loadSurveys/dbLoadSurveys'

export const makeDbLoadSurvey = (): LoadSurveys => {
  const surveyRepository = new SurveyMongoRepository()
  return new DbLoadSurveys(surveyRepository)
}
