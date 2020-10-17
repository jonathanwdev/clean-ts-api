import { Authentication, AuthenticationModel } from '../../../domains/usecases/authentication'
import { HashComparer } from '../../protocols/cryptography/hashComparer'
import { LoadAccountByEmailRepository } from '../../protocols/db/loadAccountByEmailRepository'

export class DbAuthentication implements Authentication {
  private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
  private readonly hashComparer: HashComparer

  constructor (loadAccountByEmailRepository: LoadAccountByEmailRepository, hashComparer: HashComparer) {
    this.loadAccountByEmailRepository = loadAccountByEmailRepository
    this.hashComparer = hashComparer
  }

  public async auth (authParams: AuthenticationModel): Promise<string> {
    const account = await this.loadAccountByEmailRepository.load(authParams.email)

    if (account) {
      await this.hashComparer.compare(authParams.password, account.password)
    }
    return null
  }
}
