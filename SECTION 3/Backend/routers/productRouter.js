const express = require('express');
const router = express.Router();


router.get('/add', (req,res)=>{
    res.send('response from Product Router');
})
//exporting routers
module.exports = router;
