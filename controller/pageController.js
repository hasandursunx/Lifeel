import AllergenicFood from "../models/allergenicFoodModel.js"
import HobbyAndActivity from "../models/hobbyAndActivityModel.js"

const getIndexPage = (req,res) => {
    res.render("index")
}

const getLoginPage = (req,res) => {
    res.render("login")
}

const getRegisterPage = (req,res) => {
    res.render("register")
}

const getProfilePage = (req,res) => {
    res.render("profile")
}
// ÇALIŞMA ALANAI : 
const getProfileDetailPage = async (req,res) => {
    const allergenicFoods = await AllergenicFood.find({user: res.locals.user._id})
    const hobbyAndActivities = await HobbyAndActivity.find({user: res.locals.user._id})
    res.render("profile-detail",{
        allergenicFoods,
        hobbyAndActivities
    })

}
const getNutritionProgramsPage = (req,res) => {
    res.render("nutrition-programs")
}
const getSportsProgramsPage = (req,res) => {
    res.render("sports-programs")
}
const allergenicFood = (req,res) => {
    res.render("allergenic")
}
const getPerformanceAndAnalysisPage = (req,res) => {
    console.log("REQUEST:::",req.user);
    res.render("performance-and-analysis")
}
const getLogout = (req,res) => {
    res.cookie('jwt','', {
        maxAge: 1
    })
    res.redirect('/')
}

export {
    getIndexPage,
    getLoginPage,
    getRegisterPage,
    getProfilePage,
    getProfileDetailPage,
    getNutritionProgramsPage,
    getSportsProgramsPage,
    getPerformanceAndAnalysisPage,
    getLogout,
    allergenicFood

}