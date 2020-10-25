import { EmailValidation, RequiredFieldValidation, ValidationComposite } from '../../../../presentation/helpers/validators'
import { Validation } from '../../../../presentation/protocols/validation'
import { MakeLoginValidation } from './loginValidationFactory'
import { EmailValidator } from '../../../../presentation/protocols/emailValidator'

jest.mock('../../../../presentation/helpers/validators/validationComposite')

const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }
  return new EmailValidatorStub()
}

describe('LoginValidation Factory', () => {
  test('should call validationComposite with all validations ', () => {
    MakeLoginValidation()
    const validations: Validation[] = []
    for (const field of ['email', 'password']) {
      validations.push(new RequiredFieldValidation(field))
    }
    validations.push(new EmailValidation('email', makeEmailValidator()))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
