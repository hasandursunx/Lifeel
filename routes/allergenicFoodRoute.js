import express from "express"
import * as allergenicFoodController from "../controller/allergenicFoodController.js"

const router = express.Router()

router.route("/").post(allergenicFoodController.createAllergenicFood)
router.route("/").get(allergenicFoodController.getAllAllergenicFoods)

export default router