import { CourseModel } from "../models/CourseModel.js";

export const createCourse = async (req, res) => {
  try {
    const Course = CourseModel.create(req.body);
    res.status(201).json({Course});
  } catch (error) {
    res.status(500).json({
      msg: "Error al crear el curso"
    });
  }
};

export const getCourses = async (req, res) => {
  try{
    const Course = await CourseModel.find().populate("Assignment");
    res.json(Course);
  } catch (error){
    res.status(500).json("Error interno del servidor")
  }
};

export const getCourseById = async (req, res) => {
  try {
    const Course = await CourseModel.findById(req.params.id).populate("Assignment");
    if (!Course) return res.status(404).json({msg: "Curso no encontrado"})
    res.json(Course)
  } catch (error){
    res.status(500).json({error: error.message})
  }
};

export const addAssignmentCourse = async (req, res) => {
  try{
    const {CourseId, AssignmentId} = req.body;
    const Course = await CourseModel.findOneAndUpdate(
      CourseId, 
      { $push: { Assignment: AssignmentId } },
      { new: true }
    ).populate("assignment");
    if (!Course) return res.status(404).json({msg: "Curso no encontrado"});
    res.json(Course);
  } catch(error){
    res.status(500).json({msg: "Error interno del servidor"})
  }
};

export const deleteCourse = async (req, res) => {
  try{
    const Course = await CourseModel.findOneAndDelete(req.params.id);
    if (!Course) return res.status(404).json({msg: "Curso no encontrado"});
    res.json({msg: "Curso eliminado correctamente"})
  } catch(error) {
    res.status(500).json({msg: "Error interno del servidor"})
  }
};
