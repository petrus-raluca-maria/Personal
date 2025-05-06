import mongoose from 'mongoose';

const FormDataSchema = new mongoose.Schema({
    name : String,
    email: String,
    password: String
})

export const FormDataModel = mongoose.model('log_reg_form', FormDataSchema);

