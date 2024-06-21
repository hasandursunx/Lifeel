import express from "express"
import * as hobbyAndActivityController from "../controller/hobbyAndActivityController.js"

const router = express.Router()

router.route("/").post(hobbyAndActivityController.createHobbyAndActivity)
router.route("/").get(hobbyAndActivityController.getAllHobbyAndActivities)

router.route('/:id').delete(hobbyAndActivityController.deleteHobbyAndActivity)


export default router