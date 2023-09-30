import { FileTypeEnum } from '@prisma/client'
import { NextFunction, Request, Response } from 'express'
import filesService from '../../services/files'
import CustomError from '../../utils/CustomError'
import { DEFAULT_STORAGE, supabase } from '../../utils/supabase'
import { getFolderAndUser } from './utils'

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

const upload = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.file) {
      return res.status(400).send('file is required')
    }

    const { folder, user } = await getFolderAndUser(req.body)
    if (!folder || !user) {
      throw new CustomError(400, 'Invalid folder or user')
    }

    const file = req.file

    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const timestamp = date.getTime()

    const filePath = `${year}/${month}/${day}/${user.email}/${timestamp}_${file.originalname}`

    const { error, data } = await supabase.storage
      .from(DEFAULT_STORAGE)
      .upload(filePath, file.buffer, {
        contentType: file.mimetype,
      })

    if (error) {
      throw new CustomError(500, 'Unexpected upload error')
    }

    const createdFile = await filesService.create({
      type: FileTypeEnum.NONE,
      title: filePath,
      folderId: folder.id,
      createdById: user.id,
      path: data.path,
    })

    res.status(201)
    res.send(createdFile)
  } catch (error) {
    next(error)
  }
}

export default {
  list,
  show,
  create,
  exclude,
  upload,
}
