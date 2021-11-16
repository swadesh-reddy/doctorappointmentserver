"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appointment_1 = __importDefault(require("../controllers/appointment"));
const category_1 = __importDefault(require("../controllers/category"));
const doctor_1 = __importDefault(require("../controllers/doctor"));
var express = require('express');
var doctorrouter = express.Router();
const docController = new doctor_1.default();
const docCatController = new category_1.default();
const appointmentController = new appointment_1.default();
doctorrouter.post('/getalldoctors', docController.getAllDoctors);
doctorrouter.post('/addappointment', appointmentController.addAppointment);
doctorrouter.post('/getappointmentsbydoctor', appointmentController.getAllAppointmentsByDoctorId);
doctorrouter.post('/getallcategories', docCatController.getAllDoctorCategories);
exports.default = doctorrouter;
