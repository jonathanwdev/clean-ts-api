import { Hasher } from '../../data/protocols/cryptography/hasher'
import Bcrypt from 'bcrypt'

export class BcryptAdapter implements Hasher {
  private readonly salt: number
  constructor (salt: number) {
    this.salt = salt
  }

  public async hash (value: string): Promise<string> {
    const hash = await Bcrypt.hash(value, this.salt)
    return hash
  }
}
