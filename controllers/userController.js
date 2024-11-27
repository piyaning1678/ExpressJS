//controllers/userController.js
const userService = require('../services/userService');

//สร้างฟังก์ชั่นในการอ่านข้อมูลผู้ใช้งานทั้งหมดออกมา
const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}
module.exports = {
    getAllUsers
}