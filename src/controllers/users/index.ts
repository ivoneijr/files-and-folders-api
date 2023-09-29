import { NextFunction, Request, Response } from 'express'
import userService from '../../services/users'

const list = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userService.list()

    res.send(users)
  } catch (error) {
    next(error)
  }
}

const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.show(req.params.id)

    res.send(user)
  } catch (error) {
    next(error)
  }
}

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.create(req.body)

    res.status(201)
    res.send(user)
  } catch (error) {
    next(error)
  }
}

const exclude = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await userService.exclude(req.params.id)

    res.status(204)
    res.send()
  } catch (error) {
    next(error)
  }
}

export default {
  list,
  show,
  create,
  exclude,
}
