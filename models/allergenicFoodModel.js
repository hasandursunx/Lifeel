import mongoose from "mongoose"

const { Schema } = mongoose

const allergenicFoodSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    reaction:{
        type: String,
        required: true,
        trim: true
    },
    type:{
        type: String,
        required: true,
        trim: true
    }
})

const AllergenicFood = mongoose.model("AllergenicFood", allergenicFoodSchema)

export default AllergenicFood;
