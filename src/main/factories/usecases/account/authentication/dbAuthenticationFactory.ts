import env from '@/main/config/env'
import { DbAuthentication } from '@/data/usecases/authentication/dbAuthentication'
import { AccountMongoRepository } from '@/infra/db/mongodb/account/accountMongoRepository'
import { BcryptAdapter } from '@/infra/criptography/bcryptAdapter/bcryptAdapter'
import { JwtAdapter } from '@/infra/criptography/jwtAdapter/jwtAdpter'
import { Authentication } from '@/domains/usecases/authentication'

export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAuthentication(accountMongoRepository, bcryptAdapter, jwtAdapter, accountMongoRepository)
}
