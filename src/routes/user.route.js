import { Router } from "express";

import {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
} from "../controllers/user.controller.js"

const UserRoutes = Router();
 
UserRoutes.post("/users", createUser);
UserRoutes.get("/users", getUsers);
UserRoutes.get("/users/:id", getUserById);
UserRoutes.put("/users/:id", updateUser);
UserRoutes.delete("/users/:id", deleteUser);

export default UserRoutes;