import express, { Router } from "express"
import * as allergenicFoodController from "../controller/allergenicFoodController.js"

const router = express.Router()


router.route("/").post(allergenicFoodController.createAllergenicFood)

router.route('/:id').get(allergenicFoodController.getAllAllergenicFoods)
router.route('/:id').delete(allergenicFoodController.deleteAllergenicFood)

export default router