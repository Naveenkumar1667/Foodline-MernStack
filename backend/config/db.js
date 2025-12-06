import mongoose from "mongoose";

export const connectDB =async ()=>{
await mongoose.connect('mongodb+srv://gayathrisgowda19:1906@cluster0.1rnvakq.mongodb.net/food').then(()=>console.log("DB Connected"))
}