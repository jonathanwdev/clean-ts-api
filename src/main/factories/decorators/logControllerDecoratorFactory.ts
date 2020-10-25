import { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators/logControllerDecorator'
import { LogMongoRepository } from '../../../infra/db/mongodb/log/logMongoRepoitory'

export const makeLogControllerDecorator = (controller: Controller): Controller => {
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(controller, logMongoRepository)
}
