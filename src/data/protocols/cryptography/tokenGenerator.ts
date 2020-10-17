export interface TokenGenerator {
  genarate: (id: string) => Promise<string>
}
