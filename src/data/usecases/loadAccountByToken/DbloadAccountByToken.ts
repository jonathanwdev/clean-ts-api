import { AccountModel } from '@/domains/models/account'
import { LoadAccountByToken } from '@/domains/usecases/loadAccountByToken'
import { Decrypter } from '@/data/protocols/cryptography/decrypter'
import { LoadAccountByTokenRepository } from '@/data/protocols/db/account/loadAccountByTokenRepository'

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (
    private readonly decrypter: Decrypter,
    private readonly loadAccountByTokenRepositoryStub: LoadAccountByTokenRepository
  ) {}

  public async load (accessToken: string, role?: string): Promise<AccountModel> {
    const token = await this.decrypter.decrypt(accessToken)
    if (token) {
      const account = await this.loadAccountByTokenRepositoryStub.loadByToken(accessToken, role)
      if (account) {
        return account
      }
    }
    return null
  }
}
