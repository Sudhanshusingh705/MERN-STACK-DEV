const express = require('express');
const router = express.Router();
const Model = require('../models/userModels')


router.post('/add', (req,res)=>{
    console.log(req.body);
    // res.send('response from user Router');
    //Add operation
    new Model (req.body).save() //promise
    .then((result) => {
        console.log(result);
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
})
router.get('/getall', (req, res) => {
    Model.find() 
    .then((result) => {
       console.log(result);
       res.json(result)
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
})
    //':' colon denotes url parameter
    router.get('/getbyusername/:username', (req, res) => {
        console.log(req.params.username);
        // res.send('noiceeeeee');
        Model.find({username : req.params.username})
        .then((result) => {
            console.log(result);
            res.json(result)
         }).catch((err) => {
             console.log(err);
             res.json(err);
         });
        })
         router.delete('/delete/:id', (req,res) => {
            Model.findByIdAndDelete(req.params.id)
            .then((result) => {
                console.log(result);
                res.json(result)
             }).catch((err) => {
                 console.log(err);
                 res.json(err);
             });
         })
    
         router.put('/update/:id', (req, res) => {
            Model.findByIdAndUpdate(req.params.id, req.body)
            .then((result) => {
                console.log(result);
                res.json(result)
             }).catch((err) => {
                 console.log(err);
                 res.json(err);
             });
         });

//exporting routers
module.exports = router;
