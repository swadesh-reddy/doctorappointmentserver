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
const appointment_1 = __importDefault(require("../models/appointment"));
class AppointmentService {
    constructor() {
        this.appointment = appointment_1.default;
    }
    addAppointment(appointment) {
        return __awaiter(this, void 0, void 0, function* () {
            var result = yield this.appointment.findOne(appointment);
            console.log(result);
            if (result) {
                return { message: 'Appointment already exists' };
            }
            else {
                return yield this.appointment.create(Object.assign({}, appointment));
            }
        });
    }
    getAllAppointsByDoctorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var result = yield this.appointment.find({ doctorid: id });
            console.log(result);
            return result;
        });
    }
}
exports.default = AppointmentService;
