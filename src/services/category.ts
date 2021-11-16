import DoctorCategoryModel from "../models/category";

export default class DoctorCategoryService {

    async getAllCategories(){
        var result = await DoctorCategoryModel.find({});
        console.log('', result);
        return result;
    }
}