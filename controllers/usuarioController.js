
const Usuario = require('../models/Usuario');
const Rol = require('../models/Rol');

exports.crearUsuario = async (req, res) => {
  try {
    const { nombres, apellidos, identificacion, email, rol } = req.body;
    // Verificar que el rol exista
    const rolExistente = await Rol.findById(rol);
    if (!rolExistente) {
      return res.status(400).json({ mensaje: 'Rol no existe' });
    }
    const nuevoUsuario = new Usuario({ nombres, apellidos, identificacion, email, rol });
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear el usuario' });
  }
};

exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find().populate('rol', 'nombre');
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener usuarios' });
  }
};
