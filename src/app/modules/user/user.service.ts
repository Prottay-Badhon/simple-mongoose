import { IUser } from "./user.interface";
import User from "./user.model"

export const createUserDB =async(payload: IUser):Promise<IUser>=>{
   const user = await new User(payload)
   user.save();
   return user;
}