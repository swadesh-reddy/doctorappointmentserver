
import mongoose from 'mongoose';


const doctorSchema = new mongoose.Schema({
    id: { type: Number },
    name: { type: String },
    speciality: { type: String },
    description: { type: String },
    slots: { type: Array<String>() },
    appointment_lmit: { type: Number },
    patients:{type:String},
    experience:{type:String},
    rating: { type: String},
    img: { type: String },
})
const DoctorModel = mongoose.model('doctor', doctorSchema);
export default DoctorModel;