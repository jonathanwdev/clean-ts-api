import {
  Authentication,
  UpdateAccessTokenRepository,
  LoadAccountByEmailRepository,
  AuthenticationModel,
  HashComparer,
  Encrypter
} from './dbAuthenticationProtocols'

export class DbAuthentication implements Authentication {
  constructor (
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository,
    private readonly hashComparer: HashComparer,
    private readonly encrypter: Encrypter,
    private readonly updateAccessTokenRepository: UpdateAccessTokenRepository
  ) {}

  public async auth (authParams: AuthenticationModel): Promise<string> {
    const account = await this.loadAccountByEmailRepository.loadByEmail(authParams.email)

    if (account) {
      const isValid = await this.hashComparer.compare(authParams.password, account.password)
      if (isValid) {
        const accessToken = await this.encrypter.encrypt(account.id)
        await this.updateAccessTokenRepository.updateAccessToken(account.id, accessToken)
        return accessToken
      }
    }

    return null
  }
}
