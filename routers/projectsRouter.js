const router = require("express").Router()
const Projects = require("../data/helpers/projectModel.js")


router.get("/projects", (req, res) => {
    Projects.get()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({message:"Sorry, could not retrieve projects information."})
    })
});
//------------------------------------------------------

router.get('/:id',(req, res) => {
    const {id} = req.params
    Projects.get(id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Error getting project."})
    })
});
//----------------------------------------------------------------

router.post("/",(req,res) => {
    const projectInfo = req.body
        Projects.insert(projectInfo) 
        .then(project=> {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({error: "There was an error while saving the project to the database."})
    }) 
})

//----------------------------------------------------------------

router.delete("/:id",(req,res) => {
    const {id} = req.params
    Projects.remove(id) 
    .then(delProject => {
        if(delProject>0) {
            res.status(200).json({message:"The project has been deleted."})
        } else {
            res.status(404).json({message:`The project with ID# ${id} does not exist.`})
        }
    })
    .catch(err => {
        res.status(500).json({message:"The project could not be removed."})
    })
})
//----------------------------------------------------------------

router.put("/:id",(req, res) => {
    const {id} = req.params
    const changes = req.body
   Projects.update(id,changes)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        res.status(500).json({errorMessage:"Unable to update project."})
    })
});

module.exports = router