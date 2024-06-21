import express from "express"
import dotenv from "dotenv"
import conn from "./db.js"
import cookieParser from "cookie-parser"
import methodOverride from 'method-override';
import pageRoute from "./routes/pageRoute.js"
import allergenicFoodRoute from "./routes/allergenicFoodRoute.js"
import hobbyAndActivityRoute from "./routes/hobbyAndActivityRoute.js"
import userRoute from "./routes/userRoute.js"
import {checkUser} from "./middlewares/authMiddleware.js"


dotenv.config()

//connection to the DB
conn();

const app = express()
const port = process.env.PORT

//ejs template engine
app.set("view engine", "ejs")

//static files middleware
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);



//routes
app.use("*",checkUser)
app.use("/",pageRoute)
app.use("/allergenicFood",allergenicFoodRoute)
app.use("/hobbyAndActivity",hobbyAndActivityRoute)
app.use("/users",userRoute)






app.listen(port, ()=>{
    console.log(` Application running on port: ${port} `);
});