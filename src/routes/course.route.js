import { Router } from "express";

import { 
    createCourse,
    getCourses,
    getCourseById,
    addAssignmentCourse,
    deleteCourse
} from "../controllers/course.controller.js"

const CoursesRoutes = Router();

CoursesRoutes.post("/courses", createCourse)
CoursesRoutes.get("/courses", getCourses)
CoursesRoutes.get("/courses/:id", getCourseById)
CoursesRoutes.put("/courses/:id", addAssignmentCourse)
CoursesRoutes.delete("/courses/:id", deleteCourse)

export default CoursesRoutes;







