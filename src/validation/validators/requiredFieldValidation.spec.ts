import { MissingParamError } from '@/presentation/errors'
import { RequiredFieldValidation } from './requiredFieldValidation'

const makeSut = (): RequiredFieldValidation => {
  return new RequiredFieldValidation('field')
}

describe('RequiredField Validation', () => {
  test('Shoudl return a MissingParamError if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({ name: 'any_name ' })
    expect(error).toEqual(new MissingParamError('field'))
  })

  test('Shoudl not return if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({ field: 'any_name ' })
    expect(error).toBeFalsy()
  })
})
