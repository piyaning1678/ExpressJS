//controllers/userController.js
const productService = require('../services/productService');

//สร้างฟังก์ชั่นในการอ่านข้อมูลผู้ใช้งานทั้งหมดออกมา
const getAllproduct = async (req, res,next) => {
    try {
        const product = await productService.getAllproduct();
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
}

const getProductById = async (req, res,next) => {
    try {
        const product = await productService.getProductById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
}



//เพิ่มข้อมูลสินค้า
const addProduct = async (req, res,next) => {

    //รับค่าจากผู้ใช้
    const { name ,price,qty} = req.body; 
    try {
        const product = await productService.addProduct(
        name,price,qty)
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
}
//สร้างฟังก์ชั่นสำหรับการอัพเดทข้อมูลสินค้า
const updateProduct = async (req, res,next) => {
    //รับค่าจากผู้ใช้
    const { id, name ,price,qty} = req.body; 
    try {
        const product = await productService.updateProduct(id,name,price,qty)
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
}

//สร้างฟังก์ชั่นสำหรับการลบข้อมูลสินค้า
const deleteProduct = async (req, res,next) => {
    try {
        const product = await productService.deleteProduct(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
}
module.exports = {
    getAllproduct,getProductById,addProduct,updateProduct,deleteProduct
}