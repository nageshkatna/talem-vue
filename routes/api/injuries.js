const express = require('express');

const router = express.Router();

//injuries Model
const injuries = require('../../models/injuries');

// @route GET api/injuries
// @desc Get all injuries data
// @access Public

router.get('/all', (req,res)=>{
    injuries.find({})
    .sort({id : 1})
    .then(injuries => res.json(injuries))
    .catch(err => console.log(err));
});

// @route GET api/injuries
// @desc Get injuries with value true
// @access Public

router.get('/', (req,res)=>{
    injuries.find({value:'true'})
    .sort({id : 1})
    .then(injuries => res.json(injuries))
    .catch(err => console.log(err));
});

// @route POST api/injuries
// @desc Insert Injury Data
// @access Public

router.post('/:id/:type/:val', (req,res) =>{
    //Find the data if available, Update the value to true or false. If not available then create the object
    injuries.findOneAndUpdate({"id":req.params.id}, {"type":req.params.type, "value":req.params.val}, {upsert:true})
    .then( data =>{
        //returning the true only data
        injuries.find({value: true})
        .sort({id : 1})
        .then(data => res.json(data))
        .catch(err => console.log(err))
    }
    )
    .catch(err => console.log(err))
});

module.exports = router;