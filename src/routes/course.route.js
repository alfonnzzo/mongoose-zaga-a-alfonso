import { Router } from "express";

import { 
    createCourse,
    getCourses,
    getCourseById,
    updateCourse,
    deleteCourse
} from "../controllers/course.controller.js"

const CousesRoutes = Router();

CousesRoutes.post("/", createCourse)
CousesRoutes.get("/", getCourses)
CousesRoutes.get("/:id", getCourseById)
CousesRoutes.put("/:id", updateCourse)
CousesRoutes.delete("/:id", deleteCourse)

export default CousesRoutes;







