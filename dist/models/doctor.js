"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const doctorSchema = new mongoose_1.default.Schema({
    id: { type: Number },
    name: { type: String },
    speciality: { type: String },
    description: { type: String },
    slots: { type: Array() },
    appointment_lmit: { type: Number },
    patients: { type: String },
    experience: { type: String },
    rating: { type: String },
    img: { type: String },
});
const DoctorModel = mongoose_1.default.model('doctor', doctorSchema);
exports.default = DoctorModel;
