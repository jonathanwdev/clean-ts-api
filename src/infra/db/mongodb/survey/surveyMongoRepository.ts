import { AddSurveyRepository } from '../../../../data/protocols/db/survey/addSurveyRepository'
import { LoadSurveysRepository } from '../../../../data/protocols/db/survey/loadSurveyRepository'
import { SurveyModel } from '@/domains/models/survey'
import { AddSurveyModel } from '@/domains/usecases/addSurvey'
import { MongoHelper } from '../helpers/mongoHelper'

export class SurveyMongoRepository implements AddSurveyRepository, LoadSurveysRepository {
  async add (surveyData: AddSurveyModel): Promise<void> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    await surveyCollection.insertOne(surveyData)
  }

  async loadAll (): Promise<SurveyModel[]> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    const surveys: SurveyModel[] = await surveyCollection.find().toArray()
    return surveys
  }
}
