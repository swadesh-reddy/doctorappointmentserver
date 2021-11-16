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
const doctor_1 = __importDefault(require("../services/doctor"));
const doctorservice = new doctor_1.default();
class DoctorController {
    getAllDoctors(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            doctorservice.getAllDoctors().then((data) => {
                res.send({ status: 200, message: 'Dc fetched successfully', data: data });
            }).catch((err) => {
                console.log(err);
            });
        });
    }
}
exports.default = DoctorController;
