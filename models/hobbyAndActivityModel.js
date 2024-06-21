import mongoose from "mongoose"

const { Schema } = mongoose

const hobbyAndActivitySchema = new Schema({
    name:{
        type: String,
        trim: true,
        uppercase: true

    },
    frequency:{
        type: String,
        trim: true,
        uppercase: true
    },
    times:{
        type: String,
        trim: true
    },
    duration:{
        type: String,
        trim: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref:"User"
    }
})

const HobbyAndActivity = mongoose.model("HobbyAndActivity", hobbyAndActivitySchema)

export default HobbyAndActivity;
