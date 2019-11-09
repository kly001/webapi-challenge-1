const router = require("express").Router()
const Actions = require("../data/helpers/actionModel.js")

router.get("/", (req, res) => {
    Actions.get()
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => {
        res.status(500).json({message:"Sorry, could not retrieve actions information."})
    })
});
//----------------------------------------------------------------------------------------

router.get('/:id',(req, res) => {
    const {id} = req.params
    Actions.get(id)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Error getting action."})
    })
});
//---------------------------------------------------------------------------------------

router.post("/",(req,res) => {
    const actionInfo = req.body
        Actions.insert(actionInfo) 
        .then(action => {
            res.status(201).json(action)
        })
        .catch(err => {
            res.status(500).json({error: "There was an error while saving the action to the database."})
    }) 
})

//----------------------------------------------------------------



module.exports = router