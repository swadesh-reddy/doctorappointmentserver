
import mongoose from 'mongoose';


const appointmentSchema = new mongoose.Schema({
    doctorid: { type: String },
    userid: { type: String },
    appointment_date: { type: String },
    slot: { type: String },
    status:{
        type: String,
        enum : ['Pending','Confirmed','Expired'],
        default: 'Pending'
    }
})
const AppointmentModel = mongoose.model('appointment', appointmentSchema);
export default AppointmentModel;