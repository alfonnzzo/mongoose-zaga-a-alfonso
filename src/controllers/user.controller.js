import { UserModel } from "../models/user.model.js";

export const createUser = async (req,res) => {
  const {name, email, password, profile} = req.body;
  try { 
    const newUser = await UserModel.create ({name, email, password, profile})
    res.status(201).json ({
      ok:true,
      msg: "Usuario y Perfil creados correctamente",
      data: newUser});
  }catch(error){
    console.log(error);
    return res.status(500).json ({
      ok: true,
      msg: "Error interno del servidor"
    })}};

export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find()
    .populate("courses")
    .populate("assignment"); 
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json ({
      ok: false,
      msg: "Error interno del servidor"
    });
  }
};

export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await UserModel.findById(id)
        res.status(200).json ({
            ok:true,
            data: user
        });
  }catch (error) {
        console.log(error);
        return res.status(500).json ({
            ok:false,
            msg: "error interno del servidor"
        });
    }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: id }, 
      { name }, 
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    };
    res.status(200).json({
      ok: true,
      msg: "Usuario actualizado correctamente",
      data: updatedUser
    });
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor"
    });
  }
};


export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await UserModel.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ 
        ok: false,
        msg: "Usuario no encontrado" 
      });
    }
    return res.status(200).json({
      ok: true,
      msg: "Usuario eliminado (lógicamente)",
      data: deletedUser
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

