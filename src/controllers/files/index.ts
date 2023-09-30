import { NextFunction, Request, Response } from 'express'
import filesService from '../../services/files'

const list = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const folders = await filesService.list()

    res.send(folders)
  } catch (error) {
    next(error)
  }
}

const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const folder = await filesService.show(req.params.id)

    res.send(folder)
  } catch (error) {
    next(error)
  }
}

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const folder = await filesService.create(req.body)

    res.status(201)
    res.send(folder)
  } catch (error) {
    next(error)
  }
}

const exclude = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await filesService.exclude(req.params.id)

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
