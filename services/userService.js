const db = require('../utils/db');
const User = require('../models/usermodel');

//สร้างฟังก์ชั่นในการอ่านข้อมูลผู้ใช้งานทั้งหมดออกมา
const getAllUsers = async () => {

    const client = await db.connect(); //เชื่อมต่อกับฐานข้อมูล
    const result = await client.query('SELECT * FROM public.user'); //สั่งคําสั่ง sql

    client.release(); //ปิดการเชื่อมต่อกับฐานข้อมูล

   return result.rows.map(row => new User
    (row.id, 
    row.firstname, 
    row.lastname, 
    row.email, 
    row.phone
    ));
}
module.exports = {
    getAllUsers 
}