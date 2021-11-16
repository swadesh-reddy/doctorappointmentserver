import AppointmentModel from "../models/appointment";

export default class AppointmentService {
    public appointment = AppointmentModel;

    async addAppointment(appointment: any) {
        var result = await this.appointment.findOne(appointment);
        console.log(result)
        if (result) {
            return { message: 'Appointment already exists' }
        }
        else {
            return await this.appointment.create({ ...appointment })
        }
    }
    async getAllAppointsByDoctorId(id: any) {
        var result = await this.appointment.find({doctorid:id});
        console.log(result)
        return result;
    }
}