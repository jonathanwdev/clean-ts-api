import { Decrypter } from '../../protocols/cryptography/decrypter'
import { DbLoadAccountByToken } from './DbloadAccountByToken'

const makeDecrypter = () => {
  class DecrypterStub implements Decrypter {
    async decrypt(value: string):Promise<string> {
      return new Promise(resolve => resolve('any_value'))
    }
  }
  return  new DecrypterStub()
}

interface SutTypes {
  sut: DbLoadAccountByToken
  decrypterStub: Decrypter
}

const makeSut = (): SutTypes => {
  const decrypterStub = makeDecrypter()
  const sut = new DbLoadAccountByToken(decrypterStub)
  return {
    sut,
    decrypterStub
  }
}

describe('DbLoadAccountByToken Usecase', () => {
  test('Should call Decrypter with correct Values', async () => {
    const { decrypterStub, sut } = makeSut()
    const decryptSpy = jest.spyOn(decrypterStub, 'decrypt')
    await sut.load('any_token')
    expect(decryptSpy).toHaveBeenCalledWith('any_token')
  });
});