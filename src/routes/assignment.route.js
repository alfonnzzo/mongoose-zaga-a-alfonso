import { Router } from "express";

import {
    createAssignment,
    getAssignments,
    getAssignmentById,
    updateAssignment,
    deleteAssignment
} from "../controllers/assignment.controller.js";

const assignmentRoutes = Router();

assignmentRoutes.post("/assignments", createAssignment);
assignmentRoutes.get("/assignments", getAssignments);
assignmentRoutes.get("/assignments/:id", getAssignmentById);
assignmentRoutes.put("/assignments/:id", updateAssignment);
assignmentRoutes.delete("/assignments/:id", deleteAssignment);


export default assignmentRoutes;
