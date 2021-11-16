"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var userrouter = express.Router();
const user_1 = require("../controllers/user");
const productcategory_1 = __importDefault(require("../controllers/productcategory"));
var usercontroller = new user_1.UserController();
// var upload = require('../_helpers/multer');
var productCategoryController = new productcategory_1.default();
userrouter.post('/register', usercontroller.register);
userrouter.post('/login', usercontroller.authenticate);
userrouter.post('/addproductcategory', productCategoryController.addCategory);
// router.get('/getProfile', usercontroller.)
// router.post('/updateuserpic',  upload.single('avatar'), usercontroller)
exports.default = userrouter;
