import { Schema, model } from "mongoose";
import { IUser, IUserMethods, IUserModel } from "./user.interface";

const UserSchema = new Schema<IUser,IUserModel,IUserMethods>({
    id: {type: String, required: true},
    name: { 
        firstName: { type: String, required: true },
        lastName:  {type: String, required: true} 
    },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    age: { type: String, required: true },
    gender: { type: String, required: true }
  });
  const User = model<IUser,IUserModel>("User",UserSchema)
  export default User