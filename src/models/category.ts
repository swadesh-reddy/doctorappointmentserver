
import mongoose from 'mongoose';


const doctorCategorySchema = new mongoose.Schema({
    id: { type: Number },
    name: { type: String },
    img: { type: String },
})
const DoctorCategoryModel = mongoose.model('specialists', doctorCategorySchema);
export default DoctorCategoryModel;