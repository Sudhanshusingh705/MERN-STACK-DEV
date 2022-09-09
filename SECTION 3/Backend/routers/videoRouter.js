const express = require('express');
const router = express.Router();


router.post('/add', (req,res)=>{
    res.send('response from Video Router');
})
//exporting routers
module.exports = router;
