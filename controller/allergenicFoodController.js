import AllergenicFood from "../models/allergenicFoodModel.js"

const createAllergenicFood = async (req,res) => {
    try{
        const allergenicFood = await AllergenicFood.create(req.body)
        res.status(201).json({
            succeded:true,
            allergenicFood,
        })
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
        const allergenicFoods = await AllergenicFood.find({})
        res.status(200).render("profile-detail",
            {
                allergenicFoods
            })
    } catch(error){
        res.status(500).json({
            succeded: false,
            error,
        }) 
    }
}

export { createAllergenicFood , getAllAllergenicFoods}