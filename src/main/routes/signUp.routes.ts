import { Request, Response, Router } from 'express'

export default (router: Router): void => {
  router.post('/signup', (request: Request, response: Response) => {
    return response.json({ ok: true })
  })
}
