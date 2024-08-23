import mongoose from "mongoose";


export const connectDB = () => {

    mongoose.connect("mongodb+srv://sukshanchanne:SukshaN01@food-delivery-cluster.aevhtsl.mongodb.net/food-delivery-application")
    .then(() => {
        console.log("DB Connected")
    })
}