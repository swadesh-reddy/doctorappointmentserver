"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const doctorCategorySchema = new mongoose_1.default.Schema({
    id: { type: Number },
    name: { type: String },
    img: { type: String },
});
const DoctorCategoryModel = mongoose_1.default.model('specialists', doctorCategorySchema);
exports.default = DoctorCategoryModel;
