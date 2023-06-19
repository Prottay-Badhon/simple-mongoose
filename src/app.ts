import cors from "cors"
import userRouter from "./app/modules/user/user.router"
import express, { Application, Request, Response } from "express";
const app:Application = express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/api/v2/user",userRouter)
export default app;