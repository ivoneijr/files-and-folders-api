import { NextFunction, Request, Response } from 'express'
import authService from '../../services/auth/login'

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await authService.login(req.body)

    res.send(users)
  } catch (error) {
    next(error)
  }
}

export default {
  login,
}
