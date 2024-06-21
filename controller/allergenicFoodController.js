import AllergenicFood from "../models/allergenicFoodModel.js"

const createAllergenicFood = async (req,res) => {
    try{
        await AllergenicFood.create({
            name:req.body.name,
            reaction: req.body.reaction,
            type: req.body.type,
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

const getAllAllergenicFoods = async (req,res) =>{
    try{
        const allergenicFood = await AllergenicFood.findById({ _id: req.params.id})
        res.status(200).render("allergenic",
            {
                allergenicFood
            })
    } catch(error){
        res.status(500).json({
            succeded: false,
            error,
        }) 
    }
}




const deleteAllergenicFood = async (req,res) => {
    try {
        
        await AllergenicFood.findOneAndDelete({ _id: req.params.id})

        res.status(200).redirect("/profile-detail")

    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
}

export { createAllergenicFood , getAllAllergenicFoods, deleteAllergenicFood}