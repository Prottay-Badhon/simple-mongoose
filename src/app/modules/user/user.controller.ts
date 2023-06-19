import { NextFunction, Request, Response } from "express";
import { createUserDB } from "./user.service";

export const createUser = async(req: Request,res: Response) => {
    const data = req.body;
    console.log(data);
   const user = await createUserDB(data)
    res.status(200).json({
        message: "success",
        data: user
    })
}
export const getUsers = async(req: Request,res: Response) => {
            res.status(200).json({
                message: "Ok",
                data: "Hello world"
            })
}
export const getAdmins = async(req: Request,res: Response) => {

}