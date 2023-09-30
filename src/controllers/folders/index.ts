import { NextFunction, Request, Response } from 'express'
import foldersService from '../../services/folders'

const list = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const folders = await foldersService.list()

    res.send(folders)
  } catch (error) {
    next(error)
  }
}

const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const folder = await foldersService.show(req.params.id)

    res.send(folder)
  } catch (error) {
    next(error)
  }
}

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const folder = await foldersService.create(req.body)

    res.status(201)
    res.send(folder)
  } catch (error) {
    next(error)
  }
}

const exclude = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await foldersService.exclude(req.params.id)

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
