import DoctorCategoryService from "../services/category";


const doctorcservice = new DoctorCategoryService()

export default class DoctorCategoryController {

   
   async getAllDoctorCategories(req: any, res: any, next: any) {
        console.log(req.body)
        doctorcservice.getAllCategories().then((data) => {
            res.send({ status: 200, message: 'Dc fetched successfully', data: data })
        }).catch((err) => {
            console.log(err)
        })
    }
}

