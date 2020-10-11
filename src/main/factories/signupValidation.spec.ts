import { CompareFieldValidation } from '../../presentation/helpers/validators/compareFieldsValidation'
import { RequiredFieldValidation } from '../../presentation/helpers/validators/requiredFieldValidation'
import { Validation } from '../../presentation/helpers/validators/validation'
import { ValidationComposite } from '../../presentation/helpers/validators/validationComposite'
import { MakeSignUpValidation } from './signupValidation'

jest.mock('../../presentation/helpers/validators/validationComposite')

describe('SignUpValidation Factory', () => {
  test('should call validationComposite with all validations ', () => {
    MakeSignUpValidation()
    const validations: Validation[] = []
    for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
      validations.push(new RequiredFieldValidation(field))
    }
    validations.push(new CompareFieldValidation('password', 'passwordConfirmation'))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
