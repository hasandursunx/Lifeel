import mongoose from "mongoose"
import bcrypt from "bcrypt"
import validator from "validator"

const { Schema } = mongoose

const userSchema = new Schema({
    name:{
        type: String,
        required: [true,'İsminizi belirtmediniz.'],
        trim: true,
        lowercase: true
    },
    surname:{
        type: String,
        required: [true,'Soyisminizi belirtmediniz'],
        trim: true
    },
    email:{
        type: String,
        required: [true,'E-posta adresinizi belirtmediniz.'],
        unique: true,
        validate: [validator.isEmail, 'Geçersiz E-posta adresi girdiniz.']
    },
    date:{
        required: [true,'Doğum tarihinizi belirtmediniz.'],
        type: Date,
    },
    gender:{
        type: String,
        required: [true,'Cinsiyetinizi belirtmediniz.'],
        trim: true
    },
    weight:{
        type: String,
        trim: true,
        default: ''
    },
    height:{
        type: String,
        trim: true,
        default: ''
    },
    waistSize:{
        type: String,
        trim: true,
        default: ''
    },
    fatness:{
        type: String,
        trim: true,
        default: ''
    },
    password:{
        type: String,
        required: [true,'Şifrenizi belirtmediniz.'],
        minlenght : [8,'Şifreniz En az 8 karakterden oluşmalıdır.']
    }
},
    {
        timestamps: true,
    }
)

userSchema.pre("save",function(next){
    const user = this
    bcrypt.hash(user.password, 10, (err,hash)=>{
        user.password = hash;
        next();
    })
})

const User = mongoose.model("User", userSchema)

export default User;
