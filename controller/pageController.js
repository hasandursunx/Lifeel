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

const getProfileDetailPage = (req,res) => {
    res.render("profile-detail")
}

const getNutritionProgramsPage = (req,res) => {
    res.render("nutrition-programs")
}
const getSportsProgramsPage = (req,res) => {
    res.render("sports-programs")
}
const getPerformanceAndAnalysisPage = (req,res) => {
    res.render("performance-and-analysis")
}


export {
    getIndexPage,
    getLoginPage,
    getRegisterPage,
    getProfilePage,
    getProfileDetailPage,
    getNutritionProgramsPage,
    getSportsProgramsPage,
    getPerformanceAndAnalysisPage

}