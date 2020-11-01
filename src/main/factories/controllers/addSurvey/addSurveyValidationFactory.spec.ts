import { RequiredFieldValidation, ValidationComposite } from '../../../../validation/validators'
import { Validation } from '../../../../presentation/protocols/validation'
import { MakeAddSurveyValidation } from './addSurveyValidationFactory'

jest.mock('../../../../validation/validators/validationComposite')

describe('AddSurveyValidator Factory', () => {
  test('should call validationComposite with all validations ', () => {
    MakeAddSurveyValidation()
    const validations: Validation[] = []
    for (const field of ['question', 'answers']) {
      validations.push(new RequiredFieldValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
