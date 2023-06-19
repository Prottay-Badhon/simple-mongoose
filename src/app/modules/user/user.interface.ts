import { HydratedDocument, Model } from "mongoose"

export interface IUser{
    id: string,
    name: {
        firstName: string,
        lastName: string
    },
    email: string,
    password: string
    age: String,
    phone: string,
    gender: string
    role: string,
}

export interface  IUserMethods{
    fullName(): string 
}
export interface IUserModel extends Model<IUser,{},IUserMethods>{
    getAdminUser(): Promise<HydratedDocument<IUser, IUserMethods>>
}