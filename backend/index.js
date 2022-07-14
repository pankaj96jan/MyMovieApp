const express=require('express')
const moviesDB=require("./config/database")
const router= require("./config/routes")

const app=express()
app.use(express.json())
app.use(router)

moviesDB()

const port= 4000;



// for showing data in termial
app.use(function(req,res,next){
    console.log(`${req.method}-${req.url}-${req.ip}-${new Date()}`)
    next()
})


app.listen(port,()=>{
    console.log("server is working fine", port)
})

// local repo git init
// git add .
// git commit -m "m"
// git add remote origin 
// git push origin master




// https://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@github.com/AakashSoni1997/Movies_App.git