import { Router } from "express";

import { 
    createCourse,
    getCourses,
    getCourseById,
    addAssignmentCourse,
    deleteCourse
} from "../controllers/course.controller.js"

const CousesRoutes = Router();

CousesRoutes.post("/", createCourse)
CousesRoutes.get("/", getCourses)
CousesRoutes.get("/:id", getCourseById)
CousesRoutes.put("/:id", addAssignmentCourse)
CousesRoutes.delete("/:id", deleteCourse)

export default CousesRoutes;







