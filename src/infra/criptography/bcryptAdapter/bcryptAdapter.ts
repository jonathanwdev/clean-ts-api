import { Hasher } from '@/data/protocols/cryptography/hasher'
import { HashComparer } from '@/data/protocols/cryptography/hashComparer'
import Bcrypt from 'bcrypt'

export class BcryptAdapter implements Hasher, HashComparer {
  constructor (private readonly salt: number) {}

  public async hash (value: string): Promise<string> {
    const hash = await Bcrypt.hash(value, this.salt)
    return hash
  }

  public async compare (value: string, hash: string): Promise<boolean> {
    const isValid = await Bcrypt.compare(value, hash)
    return isValid
  }
}
