import { CompareFieldValidation } from '../../presentation/helpers/validators/compareFieldsValidation'
import { EmailValidation } from '../../presentation/helpers/validators/emailValidation'
import { RequiredFieldValidation } from '../../presentation/helpers/validators/requiredFieldValidation'
import { Validation } from '../../presentation/helpers/validators/validation'
import { ValidationComposite } from '../../presentation/helpers/validators/validationComposite'
import { MakeSignUpValidation } from './signupValidation'
import { EmailValidator } from '../../presentation/protocols/emailValidator'

jest.mock('../../presentation/helpers/validators/validationComposite')

const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }
  return new EmailValidatorStub()
}

describe('SignUpValidation Factory', () => {
  test('should call validationComposite with all validations ', () => {
    MakeSignUpValidation()
    const validations: Validation[] = []
    for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
      validations.push(new RequiredFieldValidation(field))
    }
    validations.push(new CompareFieldValidation('password', 'passwordConfirmation'))
    validations.push(new EmailValidation('email', makeEmailValidator()))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
