import { AccountModel } from '../../../domains/models/account'
import { LoadAccountByToken } from '../../../domains/usecases/loadAccountByToken'
import { Decrypter } from '../../protocols/cryptography/decrypter'

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (
    private readonly decrypter: Decrypter
  ) {}

  public async load (accessToken: string, role?: string): Promise<AccountModel> {
    await this.decrypter.decrypt(accessToken)
    return null
  }
}
