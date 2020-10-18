import { Authentication, AuthenticationModel } from '../../../domains/usecases/authentication'
import { HashComparer } from '../../protocols/cryptography/hashComparer'
import { TokenGenerator } from '../../protocols/cryptography/tokenGenerator'
import { LoadAccountByEmailRepository } from '../../protocols/db/loadAccountByEmailRepository'

export class DbAuthentication implements Authentication {
  private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
  private readonly hashComparer: HashComparer
  private readonly tokenGenerator: TokenGenerator

  constructor (
    loadAccountByEmailRepository: LoadAccountByEmailRepository,
    hashComparer: HashComparer,
    tokenGenerator: TokenGenerator
  ) {
    this.loadAccountByEmailRepository = loadAccountByEmailRepository
    this.hashComparer = hashComparer
    this.tokenGenerator = tokenGenerator
  }

  public async auth (authParams: AuthenticationModel): Promise<string> {
    const account = await this.loadAccountByEmailRepository.load(authParams.email)

    if (account) {
      const isValid = await this.hashComparer.compare(authParams.password, account.password)
      if (isValid) {
        const accessToken = await this.tokenGenerator.generate(account.id)
        return accessToken
      }
    }

    return null
  }
}
