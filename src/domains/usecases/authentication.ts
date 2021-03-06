export type AuthenticationModel = {
  email: string
  password: string
}

export interface Authentication {
  auth: (authParams: AuthenticationModel) => Promise<string>
}
