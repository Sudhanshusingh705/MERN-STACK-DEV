//importig rxpress module
const express = require('express');
// initializing express app
const app = express();
const userRouter = require('./routers/userRouter')
const videoRouter = require('./routers/videoRouter')
const imageRouter = require('./routers/imageRouter')
const productRouter = require('./routers/productRouter')
const cors =require ('cors');
// const port = process.env.PORT //5000;
const port = 5000; //5000;

app.use(express.json());
app.use(cors({
    origin : ['http://localhost:3000']
}))

//middleware
app.use('/user', userRouter);
app.use('/video', videoRouter);
app.use('/image', imageRouter);
app.use('/product', imageRouter);

//route or endpoint
app.get('/', (req, res)=>{
    res.send('response from express');
})
// app.get('/home', (req, res)=>{
//     res.send('AA gaya mai');
// })
app.get('/home', (req,res)=> {
    res.send('response mila ghar se');
})
app.get('/hehe', (req,res)=> {
    res.send('hehe mila ghar se');
})
//starting the server 
app.listen(port, ()=>{
    console.log('Express server started...');
});

