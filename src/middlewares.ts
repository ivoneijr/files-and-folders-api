import { Request, Response } from 'express'

export function notFound(_req: Request, res: Response) {
  res.status(404)
  res.send()
}
