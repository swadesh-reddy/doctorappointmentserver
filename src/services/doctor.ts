import DoctorModel from "../models/doctor";

export default class DoctorService {

    async getAllDoctors(){
        var result = await DoctorModel.find({});
        console.log('', result);
        return result;
    }
}