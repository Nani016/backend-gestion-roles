
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombres: { type: String, required: true },
  apellidos: { type: String, required: true },
  identificacion: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  rol: { type: mongoose.Schema.Types.ObjectId, ref: 'Rol', required: true }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
