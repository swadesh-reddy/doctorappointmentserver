
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String },
    contactNumber: { type: String },
})
const user = mongoose.model('user', userSchema);
export default user;