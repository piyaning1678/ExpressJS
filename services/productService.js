const db = require('../utils/db');
const product = require('../models/productModel');


//สร้างฟังก์ชั่นในการอ่านข้อมูลผู้ใช้งานทั้งหมดออกมา
const getAllproduct = async () => {

    const client = await db.connect(); //เชื่อมต่อกับฐานข้อมูล
    const result = await client.query('SELECT * FROM public.product'); //สั่งคําสั่ง sql

    client.release(); //ปิดการเชื่อมต่อกับฐานข้อมูล

    return result.rows.map(row => new product
        (row.id,
            row.name,
            row.price,
            row.qty,
            row.creatdate
        ));
}

//ฟังก์ชั่นสำหรับอ่านข้อมูลสำหรับอ่านข้อมูลสินค้า ID
const getProductById = async (id) => {

    const client = await db.connect(); //เชื่อมต่อกับฐานข้อมูล
    const result = await client.query('SELECT * FROM public.product WHERE id = $1', [id]); //สั่งคําสั่ง sql

    client.release(); //ปิดการเชื่อมต่อกับฐานข้อมูล

    return result.rows.map(row => new product(
        row.id,
        row.name,
        row.price,
        row.qty,
        row.creatdate
    ))
}

//สร้างฟังก์ชั่นสําหรับเพิ่มข้อมูลสินค้า 
const addProduct = async (name, price, qty) => {
    const client = await db.connect(); //เชื่อมต่อกับฐานข้อมูล
    const result = await client.query('INSERT INTO public.product (name, price, qty) VALUES ($1, $2, $3) returning *', [name, price, qty]); //สั่งคําสั่ง sql
    client.release(); //ปิดการเชื่อมต่อกับฐานข้อมูล
    return new product(
        result.rows[0].id,
        result.rows[0].name,
        result.rows[0].price,
        result.rows[0].qty,
        result.rows[0].creatdate
    )
}
//สร้างฟังก์ชั่นสำหรับการแก้ไขข้อมูลสินค้า
const updateProduct = async (id,name,price,qty) => {
    const client = await db.connect(); //เชื่อมต่อกับฐานข้อมูล
    const result = await client.query('UPDATE public.product SET name = $1, price = $2, qty = $3 WHERE id = $4 returning *', [name, price, qty, id]); //สั่งคําสั่ง sql
    client.release(); //ปิดการเชื่อมต่อกับฐานข้อมูล

    return new product (
        result.rows[0].id,
        result.rows[0].name,
        result.rows[0].price,
        result.rows[0].qty,
        result.rows[0].creatdate
    )
}
//ฟังก์ชั่นสำหรับการลบข้อมูลสินค้า
const deleteProduct = async (id) => {
    const client = await db.connect(); //เชื่อมต่อกับฐานข้อมูล
    const result = await client.query('DELETE FROM public.product WHERE id = $1', [id]); //สั่งคําสั่ง sql
    client.release(); //ปิดการเชื่อมต่อกับฐานข้อมูล    

    return new product (
        result.rows[0].id,
        result.rows[0].name,
        result.rows[0].price,
        result.rows[0].qty,
        result.rows[0].creatdate
    )
}

module.exports = {
    getAllproduct,
    getProductById, addProduct,updateProduct,deleteProduct
}
