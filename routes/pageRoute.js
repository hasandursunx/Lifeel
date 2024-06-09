import express from "express"
//import * as pageController from "../controller/pageController.js"

import { 
    getIndexPage,
    getLoginPage,
    getRegisterPage,
    getProfilePage,
    getProfileDetailPage, 
    getSportsProgramsPage,
    getNutritionProgramsPage,
    getPerformanceAndAnalysisPage
} 

    from "../controller/pageController.js"

const router = express.Router()

router.route("/").get(getIndexPage)
router.route("/login").get(getLoginPage)
router.route("/register").get(getRegisterPage)
router.route("/profile").get(getProfilePage)
router.route("/profile-detail").get(getProfileDetailPage)
router.route("/sports-programs").get(getSportsProgramsPage)
router.route("/nutrition-programs").get(getNutritionProgramsPage)
router.route("/performance-and-analysis").get(getPerformanceAndAnalysisPage)

export default router