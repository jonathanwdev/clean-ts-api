import { Decrypter } from '../../protocols/cryptography/decrypter'
import { DbLoadAccountByToken } from './DbloadAccountByToken'

describe('DbLoadAccountByToken Usecase', () => {
  test('Should call Decrypter with correct Values', async () => {
    class DecrypterStub implements Decrypter {
      async decrypt(value: string):Promise<string> {
        return new Promise(resolve => resolve('any_value'))
      }
    }

    const decrypterStub = new DecrypterStub()
    const decryptSpy = jest.spyOn(decrypterStub, 'decrypt')
    const sut = new DbLoadAccountByToken(decrypterStub)
    await sut.load('any_token')
    expect(decryptSpy).toHaveBeenCalledWith('any_token')
  });
});