
const Rol = require('../models/Rol');

exports.crearRol = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const nuevoRol = new Rol({ nombre, descripcion });
    await nuevoRol.save();
    res.status(201).json(nuevoRol);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear el rol' });
  }
};

exports.listarRoles = async (req, res) => {
  try {
    const roles = await Rol.find();
    res.json(roles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener roles' });
  }
};
