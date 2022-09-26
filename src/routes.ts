import { Router } from "express"
import UserController from "./controllers/userController"

const router = Router()

router.get("/users", UserController.index)

router.post("/user", UserController.create)

router.get("/user/:id", UserController.findById)

router.put("/user/:id", UserController.update)

export default router
