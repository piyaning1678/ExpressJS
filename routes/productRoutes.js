const express = require('express');

//import db
const db = require('../utils/db');

const router = express.Router();

//ทดสอบการเชื่อมต่อกับฐานข้อมูล postgres
router.get("/testdb", async (req, res) => {
    try {
        const client = await db.connect(); //เชื่อมต่อกับฐานข้อมูล
        const result = await client.query('SELECT * FROM public.user'); //สั่งคําสั่ง sql
        res.send(result.rows);
    } catch (error) {
        console.log(error);
    }   
})

// create a route
router.get('/', (req, res) => {
    res.send('Hello Piyaning!');
});

router.get('/about', (req, res) => {
    res.send('About Piyaning!');
});
router.get('/product', (req, res) => {
    res.send('read product page test!');
});

router.post('/product', (req, res) => {
    res.send('Add product page test!');
});

router.put('/product', (req, res) => {
    res.send('Edit product page test!');
});

router.delete('/product', (req, res) => {
    res.send('delete product page test!');
});

module.exports = router;

