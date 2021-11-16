import DoctorService from "../services/doctor";

const doctorservice = new DoctorService()

export default class DoctorController {

   
   async getAllDoctors(req: any, res: any, next: any) {
        console.log(req.body)
        doctorservice.getAllDoctors().then((data) => {
            res.send({ status: 200, message: 'Dc fetched successfully', data: data })
        }).catch((err) => {
            console.log(err)
        })
    }
}

