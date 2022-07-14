const mongoose=require("mongoose")


 //establish connection backed to database
const movieDB=()=>{
    mongoose.connect("mongodb://localhost:27017/moviesDB")
    .then(()=>{
        console.log("successfully conected to mongoose database")
    })
    .catch((error)=>{
        console.log("error to connect",error)
    })

}

module.exports=movieDB