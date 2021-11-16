"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appointment_1 = __importDefault(require("../services/appointment"));
const appointmentservice = new appointment_1.default();
class AppointmentController {
    addAppointment(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var appointment = req.body;
                var message = yield appointmentservice.addAppointment(appointment);
                res.status(201).json({ status: 200, data: message, message: "Appointment Added" });
            }
            catch (error) {
                next(error);
            }
        });
    }
    getAllAppointmentsByDoctorId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var id = req.body.doctorid;
            const data = yield appointmentservice.getAllAppointsByDoctorId(id);
            res.status(201).json({ status: 200, data: data, message: "Fetched data" });
        });
    }
}
exports.default = AppointmentController;
