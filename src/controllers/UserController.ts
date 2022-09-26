import { Request, Response } from "express"
import UserModel from "../database/UserModel"

const UserController = {
  async index(req: Request, res: Response): Promise<Response> {
    let users = await UserModel.find()
    return res.json(users)
  },
  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    let user = await UserModel.findById(id)
    return res.json(user)
  },
  async create(req: Request, res: Response): Promise<Response> {
    let user = await UserModel.create(req.body)
    return res.json(user)
  },
  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    let user = await UserModel.findByIdAndUpdate(id, req.body)
    return res.json(user)
  },
}

export default UserController
