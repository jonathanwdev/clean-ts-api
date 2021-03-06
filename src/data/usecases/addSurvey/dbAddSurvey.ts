import { AddSurvey, AddSurveyRepository, AddSurveyModel } from './dbAddSurveyProtocols'

export class DbAddSurvey implements AddSurvey {
  constructor (
    private readonly addSurveyRepository: AddSurveyRepository
  ) {}

  async add (data: AddSurveyModel): Promise<void> {
    await this.addSurveyRepository.add(data)
    return new Promise(resolve => resolve())
  }
}
