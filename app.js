import express from "express"

const app = express()
const port = 3000

//static files middleware
app.use(express.static('public'))

app.get("/",(req,res)=>{
    res.send("INDEX SAYFASI 2")
})

app.listen(port, ()=>{
    console.log(` Application running on port: ${port} `);
});