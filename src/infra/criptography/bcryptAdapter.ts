import { Hasher } from '../../data/protocols/cryptography/hasher'
import Bcrypt from 'bcrypt'
import { HashComparer } from '../../data/protocols/cryptography/hashComparer'

export class BcryptAdapter implements Hasher, HashComparer {
  private readonly salt: number
  constructor (salt: number) {
    this.salt = salt
  }

  public async hash (value: string): Promise<string> {
    const hash = await Bcrypt.hash(value, this.salt)
    return hash
  }

  public async compare (value: string, hash: string): Promise<boolean> {
    await Bcrypt.compare(value, hash)
    return new Promise(resolve => resolve(true))
  }
}
