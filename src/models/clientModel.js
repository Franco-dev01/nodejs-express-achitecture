import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const clientSchema = new Schema({
    firstName: {type: String, required: "Entrer le nom"},
    lastName: {type: String, required: "Entrer le prénom"},
    email: {type: String},
    phone: {type: Number},
    city: {type: String},
    create_date: {type: Date, default: Date.now},
})