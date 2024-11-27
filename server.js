//import express
const express = require('express');

//import Cors
const cors = require('cors');

//import Router
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoute');
const product = require('./routes/productRoute');

//create an instance of express
const app = express();
app.use(express.json());

//use Cors
app.use(cors({
    // origin: ["http://itgenius.co.th,"] }));
    origin :"*", //อนุญาตให้เข้าถึงจากทุกโดนเมน
    methods: ["GET", "POST", "PUT", "DELETE"],//กำหนด method ที่อนุญาต
}));

//create a port
const port = 3000;
 
//use router
app.use('/api/product', productRouter);
app.use('/api/users', userRouter);
app.use('/api/products',product);

//start the server
app.listen(port, () => {
    console.log('example app listening on port ${port}!');
});
