import { EmailValidator } from '../presentation/protocols/emailValidator'

export class EmailValidatorAdapter implements EmailValidator {
  public isValid (email: string): boolean {
    return false
  }
}
