import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const contactSchema = new Schema({
    firstName: {type: String, required: "Entrer le nom"},
    lastName: {type: String, required: "Entrer le prénom"},
    email: {type: String},
    company: {type: String},
    phone: {type: Number},
    create_date: {type: Date, default: Date.now},
})