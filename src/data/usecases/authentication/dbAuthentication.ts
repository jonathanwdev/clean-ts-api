import { Authentication, AuthenticationModel } from '../../../domains/usecases/authentication'
import { LoadAccountByEmailRepository } from '../../protocols/loadAccountByEmailRepository'

export class DbAuthentication implements Authentication {
  private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository

  constructor (loadAccountByEmailRepository: LoadAccountByEmailRepository) {
    this.loadAccountByEmailRepository = loadAccountByEmailRepository
  }

  public async auth (authParams: AuthenticationModel): Promise<string> {
    await this.loadAccountByEmailRepository.load(authParams.email)
    return null
  }
}
