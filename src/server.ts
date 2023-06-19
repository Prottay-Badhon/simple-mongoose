import app from "./app";
const mongoose = require('mongoose');
const port:number = 5000;
async function bootstrap() {
  try{
   const success =  await mongoose.connect('mongodb://127.0.0.1:27017/newMongoose');
   if(success){
    console.log("Successfully database connection")
   }
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`)
    })
  }
  catch(error){
    console.log(`database connection failed! Error: ${error}`)
  }
}
bootstrap()