const mongoose = require('mongoose');

const db ='mernwss1000'
const dbUrl = `mongodb+srv://samsri100:sammuarth@cluster0.dghxhj7.mongodb.net/${db}?retryWrites=true&w=majority`;

// console.log(dbUrl);

//Asynchronuous Function - returnx Promise
mongoose.connect(dbUrl)
// p.then().catch()
.then((result) => {
    console.log('database connected...');
}).catch((err) => {
    console.log(err);
});
//Asynchronous vs Synchronuous 

module.exports = mongoose;
