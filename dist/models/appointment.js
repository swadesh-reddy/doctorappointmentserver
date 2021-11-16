"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const appointmentSchema = new mongoose_1.default.Schema({
    doctorid: { type: String },
    userid: { type: String },
    appointment_date: { type: String },
    slot: { type: String },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Expired'],
        default: 'Pending'
    }
});
const AppointmentModel = mongoose_1.default.model('appointment', appointmentSchema);
exports.default = AppointmentModel;
