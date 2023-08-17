import mongoose from "mongoose";

export async function connect() {
  try{
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on('connected', ()=>{
      console.log('MongoDB connected successfully')
    })
    
    connection.on('error', (err) => {
      console.log('MongoDB connection error please make suer MongoDB is running. '+ err);
    });
    
  }catch(error){
    console.log('somthing went wrong!');
    console.log(error);
  }
}