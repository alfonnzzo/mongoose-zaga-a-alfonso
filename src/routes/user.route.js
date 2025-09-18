import { Router } from "express";

import {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
} from "../controllers/user.controller.js"

const UserRoutes = Router();
 
UserRoutes.post("/user", createUser);
UserRoutes.get("/users", getUsers);
UserRoutes.get("/user/:id", getUserById);
UserRoutes.put("/user/:id", updateUser);
UserRoutes.delete("/user/id", deleteUser);

export default UserRoutes;