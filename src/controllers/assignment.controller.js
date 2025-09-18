import { AssignmentModel } from "../models/assignment.model.js";

export const createAssignment = async (req, res) => {
  try {
    const { title, grade } = req.body;
    const newAssignment = await AssignmentModel.create({
      title,
      grade
    });
    res.status(201).json({
      ok: true,
      msg: "Asignatura creada correctamente",
      data: newAssignment
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno del servidor"
    })
  }
};

export const getAssignments = async (req, res) => {
  try{
    const assignment = await AssignmentModel.find();
    res.status(200).json({
      ok: true,
      data: assignment
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno del servidor"
    })
  }
};

export const getAssignmentById = async (req, res) => {
  try{
      const {id} = req.params;
    const Assignment = await AssignmentModel.findById(id);
    if (!Assignment)
      return res.status(404).json({
      ok: false,
      msg: "Assignatura no encontrada"
    });
    res.status(200).json({
      ok: true,
      data: Assignment
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: true,
      msg: "Error interno del servidor"
    })
  }
};

export const updateAssignment = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, grade } = req.body;
    const updatedAssignment = await AssignmentModel.findByIdAndUpdate(
      id,
      { title, grade },
      { new: true }
    );

    if (!updatedAssignment) {
      return res.status(404).json({
        ok: false,
        msg: "Assignatura no encontrada"
      });
    }
    return res.status(200).json({
      ok: true,
      msg: "Asignatura actualizada correctamente",
      data: updatedAssignment
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno del servidor"
    });
  }
};


export const deleteAssignment = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAssignment = await AssignmentModel.findByIdAndDelete(id);
        if (!deletedAssignment) {
      return res.status(404).json({
        ok: false,
        msg: "Asignatura no encontrada",
      });
    }
      res.status(200).json({
      ok: true,
      msg: "Asignatura eliminada correctamente",
      data: deletedAssignment,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno del servidor"
    })
  }
};
