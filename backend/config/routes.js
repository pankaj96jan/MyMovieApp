const express = require("express")
const router = express.Router()

const movieCltr = require("../app/controller/movieCtrl")
const userCtrl = require("../app/controller/userCtrl")
const wishyMovieCltr = require("../app/controller/wishyMovieController")
const { isAuthenticate } = require("../app/middlwares/IsAuthenticate")


//for movies
router.post("/api/movie", isAuthenticate, movieCltr.create)
router.get("/api/movie", movieCltr.list)
router.get("/api/movie/:id", movieCltr.show)
router.put("/api/movie/:id", movieCltr.update)
router.delete("/api/movie/:id", movieCltr.destory)

//for wishyMovies
router.post("/api/movie/wishy", wishyMovieCltr.create)
router.get("/api/movie/wishy/all", wishyMovieCltr.list)
router.get("/api/movie/wishy/:id", wishyMovieCltr.show)
router.put("/api/movie/wishy/:id", wishyMovieCltr.update)
router.delete("/api/movie/wishy/:id", wishyMovieCltr.destory)

//for User Routes
router.post("/api/user/signup", userCtrl.signup)
router.post("/api/user/login", userCtrl.login)
router.get("/api/user/account", isAuthenticate, userCtrl.account)
router.get("/api/user/logout", userCtrl.logout)



router.get("/api/movies/wishy",)



module.exports = router