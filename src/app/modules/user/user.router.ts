import express  from 'express';
import { createUser, getAdmins, getUsers } from './user.controller';

const router = express.Router();
router.get("/", getUsers);
router.get("/admin", getAdmins);
router.post("/create-user", createUser)

export default router