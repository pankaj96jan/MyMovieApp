const express=require("express")
const router=express.Router()

const movieCltr=require("../app/controller/movieCtrl")




router.post("/api/movie",movieCltr.create)
router.get("/api/movie",movieCltr.list)
router.get("/api/movie/:id",movieCltr.show)
router.put("/api/movie/:id",movieCltr.update)
router.delete("/api/movie/:id",movieCltr.destory)





module.exports=router