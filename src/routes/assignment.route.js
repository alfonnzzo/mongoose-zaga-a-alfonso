import { Router } from "express";

import {
    createAssignment,
    getAssignments,
    getAssignmentById,
    updateAssignment,
    deleteAssignment
} from "../controllers/assignment.controller.js";

const assignmentRoutes = Router();

assignmentRoutes.post("/", createAssignment);
assignmentRoutes.get("/", getAssignments);
assignmentRoutes.get("/:id", getAssignmentById);
assignmentRoutes.put("/:id", updateAssignment);
assignmentRoutes.delete("/:id", deleteAssignment);


export default assignmentRoutes;
