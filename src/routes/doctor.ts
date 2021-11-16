import AppointmentController from "../controllers/appointment";
import DoctorCategoryController from "../controllers/category";
import DoctorController from "../controllers/doctor";

var express = require('express');
var doctorrouter = express.Router();
const docController = new DoctorController();
const docCatController = new DoctorCategoryController();
const appointmentController = new AppointmentController();

doctorrouter.post('/getalldoctors',docController.getAllDoctors)
doctorrouter.post('/addappointment',appointmentController.addAppointment)
doctorrouter.post('/getappointmentsbydoctor',appointmentController.getAllAppointmentsByDoctorId)
doctorrouter.post('/getallcategories',docCatController.getAllDoctorCategories)



export default doctorrouter;