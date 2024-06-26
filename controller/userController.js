import User from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const createUser = async (req,res) => {
    try{
        const user = await User.create(req.body)
        res.redirect("/login")
    }
    catch(error){

        let errors2 = {}
        if(error.name === "ValidationError"){
            Object.keys(error.errors).forEach((key) => {
                errors2[key] = error.errors[key].message
            })
        }

        console.log("errs2 : " , errors2)


        res.status(400).json(errors2)
    }
}

const loginUser = async (req,res) => {
    try{
        const {email, password} = req.body

        const user = await User.findOne({email})

        let same = false

        if(user){
            same = await bcrypt.compare(password, user.password)
        }else{
            return res.status(401).json({
                succeded: false,
                error :  "There is no such user",
            })
        }
        if(same){

            const token = createToken(user._id)
            res.cookie("jwt",token,{
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24
            })

            res.redirect("/profile")
        }else{
            res.status(401).json({
                succeded: false,
                error :  "Password are not matched",
            })
        }
    }
    catch(error){
        res.status(500).json({
            succeded: false,
            error,
        })
    }
}
const createToken = (userId) => {
    return jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn:"1d"
    })
}

const updateProfileDetail = async (req,res) => {
    
    try {
        
        const profileDetail = await User.findById(req.params.id)

        console.log(req.body);
        profileDetail.weight = req.body.weight
        profileDetail.height = req.body.height
        profileDetail.save()

        res.status(200).redirect("/profile-detail")

    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
}

export { createUser, loginUser, updateProfileDetail }