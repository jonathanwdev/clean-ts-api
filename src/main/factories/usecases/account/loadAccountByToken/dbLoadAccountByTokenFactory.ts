import { DbLoadAccountByToken } from '../../../../../data/usecases/loadAccountByToken/DbloadAccountByToken'
import { LoadAccountByToken } from '../../../../../domains/usecases/loadAccountByToken'
import { JwtAdapter } from '../../../../../infra/criptography/jwtAdapter/jwtAdpter'
import { AccountMongoRepository } from '../../../../../infra/db/mongodb/account/accountMongoRepository'
import env from '../../../../config/env'

export const makeDbLoadAccountByToken = (): LoadAccountByToken => {
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const accountRepository = new AccountMongoRepository()
  return new DbLoadAccountByToken(jwtAdapter, accountRepository)
}
