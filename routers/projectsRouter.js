const router = require("express").Router()
const Projects = require("../data/helpers/projectModel.js")
const Actions = require("../data/helpers/actionModel.js")

router.get("/", (req, res) => {
    Projects.get()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({message:"Sorry, could not retrieve projects information."})
    })
});


module.exports = router