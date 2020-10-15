import { Encrypter } from '../../data/protocols/cryptography/encrypter'
import Bcrypt from 'bcrypt'

export class BcryptAdapter implements Encrypter {
  private readonly salt: number
  constructor (salt: number) {
    this.salt = salt
  }

  public async encrypt (value: string): Promise<string> {
    const hash = await Bcrypt.hash(value, this.salt)
    return hash
  }
}
