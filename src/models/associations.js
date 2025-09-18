
import { UserModel } from "../models/user.model.js";
import { CourseModel } from "../models/course.model.js";
import { AssignmentModel } from "../models/assignment.model.js";

// Relación User ↔ Course (1:N)
// Un usuario puede estar inscrito en varios cursos
UserModel.schema.add({
  courses: [{ type: "ObjectId", ref: "Course" }]
});

// Relación Course ↔ Assignment (1:N)
// Un curso puede tener varios assignments
CourseModel.schema.add({
  assignments: [{ type: "ObjectId", ref: "Assignment" }]
});

// Relación Assignment ↔ User (N:M)
// Un assignment puede estar asignado a varios estudiantes
AssignmentModel.schema.add({
  students: [{ type: "ObjectId", ref: "User" }]
});
