import express from "express"
//import * as authMiddleware from "../middlewares/authMiddleware.js"

import * as authMiddleware from "../middlewares/authMiddleware.js"

import { 
    getIndexPage,
    getLoginPage,
    getRegisterPage,
    getProfilePage,
    getProfileDetailPage, 
    getSportsProgramsPage,
    getNutritionProgramsPage,
    getPerformanceAndAnalysisPage,
    getLogout,
    allergenicFood
} 

from "../controller/pageController.js"

const router = express.Router()

router.route("/").get(getIndexPage)
router.route("/login").get(getLoginPage)
router.route("/logout").get(getLogout)
router.route("/allergenicFood").get(allergenicFood)
router.route("/register").get(getRegisterPage)
router.route("/profile").get(authMiddleware.authenticateToken, getProfilePage)
router.route("/profile-detail").get(authMiddleware.authenticateToken,getProfileDetailPage)
router.route("/sports-programs").get(authMiddleware.authenticateToken,getSportsProgramsPage)
router.route("/nutrition-programs").get(authMiddleware.authenticateToken,getNutritionProgramsPage)
router.route("/performance-and-analysis").get(authMiddleware.authenticateToken,getPerformanceAndAnalysisPage)

export default router