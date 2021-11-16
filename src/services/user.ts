import UserModel from "../models/user";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import jwtDecode from "jwt-decode";
import config from '../config/database';
import fs from 'fs';
import path from 'path';

export default class UserService {

    async getUserById(userdetails: any) {
        console.log(userdetails);
        var user = await UserModel.findOne(userdetails)
        return user
    }

    async userAuthenticate(data:any) {

        const user:any = await UserModel.find({"email": data.email});
        if (user.length <= 0) {
            return { message: "Email is not associated with this account", code: 400 };
          }
          console.log(data.password)
          if (bcrypt.compareSync(data.password, user[0].hash)) {
             const token = jwt.sign({user: user}, config.secret, {expiresIn: 72000});
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
    }

    async addUser(newUser: any) {
        var result = await UserModel.find({ email: newUser.email })
        console.log(result.length)
        if (result.length > 0) {
            return { message: 'email is already taken',status:400 }
        }
        var newuser: any = new UserModel(newUser)

        if (newUser.password) {
            newuser.hash = bcrypt.hashSync(newUser.password, 10)

        }
        newuser.avatar = ""
        var res = await newuser.save()
        return { "message": "register successfull", "status": 200 };
    }

    async  updateUserpic(req: any, res: any)  {
        let decoded:any = jwtDecode(req.header('authorization'));
        console.log(decoded.user[0].email)

        const file = path.join(__dirname, '../images/' + req.file.originalname)
        const myFile = fs.readFileSync(file)

        const fileMetaData = {
            originalname: req.file.originalname,
            buffer: myFile
        }
        return 
        // await mybucket.uploadFile(fileMetaData).then(async (data) => {
        //     console.log(decoded.user[0].email)
        //     //  UserModel.updateOne({"email":decoded.user[0].email},{$set:{avatar:data}})
        //     var user: any = await UserModel.findOne({ "email": decoded.user[0].email });
        //     if (!user) { res.send({ message: "something went wrong.", status: 500 }) }
        //     user.avatar = data;
        //     await user.save();
        //     return user
        // }).catch((err: any) => { console.log(err); })

    }
    async getProfile (req:any) {
        let decoded:any = jwtDecode(req.header('authorization'));
        console.log(decoded.user[0].email)
        let result = await UserModel.find({ "email": decoded.user[0].email });
        if (result.length <= 0) {
            return { message: "Email is not associated with this account", code: 400 };
        }
        return result;
    }
}


