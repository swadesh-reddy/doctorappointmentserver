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
const user_1 = __importDefault(require("../models/user"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const database_1 = __importDefault(require("../config/database"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class UserService {
    getUserById(userdetails) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(userdetails);
            var user = yield user_1.default.findOne(userdetails);
            return user;
        });
    }
    userAuthenticate(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.default.find({ "email": data.email });
            if (user.length <= 0) {
                return { message: "Email is not associated with this account", code: 400 };
            }
            console.log(data.password);
            if (bcryptjs_1.default.compareSync(data.password, user[0].hash)) {
                const token = jsonwebtoken_1.default.sign({ user: user }, database_1.default.secret, { expiresIn: 72000 });
                return {
                    status: 200,
                    message: 'Successfully logged in',
                    token: token,
                    user: user
                };
            }
            else {
                return { message: "email or password is incorrect", code: 400 };
            }
        });
    }
    addUser(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            var result = yield user_1.default.find({ email: newUser.email });
            console.log(result.length);
            if (result.length > 0) {
                return { message: 'email is already taken', status: 400 };
            }
            var newuser = new user_1.default(newUser);
            if (newUser.password) {
                newuser.hash = bcryptjs_1.default.hashSync(newUser.password, 10);
            }
            newuser.avatar = "";
            var res = yield newuser.save();
            return { "message": "register successfull", "status": 200 };
        });
    }
    updateUserpic(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let decoded = (0, jwt_decode_1.default)(req.header('authorization'));
            console.log(decoded.user[0].email);
            const file = path_1.default.join(__dirname, '../images/' + req.file.originalname);
            const myFile = fs_1.default.readFileSync(file);
            const fileMetaData = {
                originalname: req.file.originalname,
                buffer: myFile
            };
            return;
            // await mybucket.uploadFile(fileMetaData).then(async (data) => {
            //     console.log(decoded.user[0].email)
            //     //  UserModel.updateOne({"email":decoded.user[0].email},{$set:{avatar:data}})
            //     var user: any = await UserModel.findOne({ "email": decoded.user[0].email });
            //     if (!user) { res.send({ message: "something went wrong.", status: 500 }) }
            //     user.avatar = data;
            //     await user.save();
            //     return user
            // }).catch((err: any) => { console.log(err); })
        });
    }
    getProfile(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let decoded = (0, jwt_decode_1.default)(req.header('authorization'));
            console.log(decoded.user[0].email);
            let result = yield user_1.default.find({ "email": decoded.user[0].email });
            if (result.length <= 0) {
                return { message: "Email is not associated with this account", code: 400 };
            }
            return result;
        });
    }
}
exports.default = UserService;
