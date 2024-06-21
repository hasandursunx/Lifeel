import express from "express"
import * as userController from "../controller/userController.js"

const router = express.Router()

router.route("/register").post(userController.createUser)
router.route("/login").post(userController.loginUser)

router.route('/:id').put(userController.updateProfileDetail)




export default router