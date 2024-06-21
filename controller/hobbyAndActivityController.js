import HobbyAndActivity from "../models/hobbyAndActivityModel.js"

const createHobbyAndActivity = async (req,res) => {
    try{
        await HobbyAndActivity.create({
            name:req.body.name,
            frequency: req.body.frequency,
            times: req.body.times,
            duration: req.body.duration,
            user: res.locals.user._id
        })
        res.status(201).redirect("/profile-detail")
    }
    catch(error){
        res.status(500).json({
            succeded: false,
            error,
        })
    }
}

const getAllHobbyAndActivities = async (req,res) =>{
    try{
        const hobbyAndActivities = await HobbyAndActivity.find({})
        res.status(200).render("profile-detail",
            {
                hobbyAndActivities
            })
    } catch(error){
        res.status(500).json({
            succeded: false,
            error,
        }) 
    }
}

const deleteHobbyAndActivity = async (req,res) => {
    try {
        
        await HobbyAndActivity.findOneAndDelete({ _id: req.params.id})

        res.status(200).redirect("/profile-detail")

    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
}


export { createHobbyAndActivity , getAllHobbyAndActivities,deleteHobbyAndActivity}