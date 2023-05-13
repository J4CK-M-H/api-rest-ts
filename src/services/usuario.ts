import bcrypt from 'bcrypt';
import { Usuario } from '../interfaces/usuario.interface';
import UsuarioModel from '../models/Usuario';
import { Auth } from '../interfaces/auth.interface';
import { generarToken } from '../utils/jwt.handle';

const autenticateUsuario = async(data: Auth) => {

  let { email, password } = data;

  const isAlreadyExist = await UsuarioModel.findOne({ email });

  if( isAlreadyExist && ( await bcrypt.compare(password, isAlreadyExist.password ) ) ) {

    const token = generarToken(`${isAlreadyExist._id}`);

    const data = {
      token,
      _id: isAlreadyExist._id,
      nombre: isAlreadyExist.nombre,
      apellido: isAlreadyExist.apellido,
      email: isAlreadyExist.email
    }
    
    return data;
    
  }else {
    return ("Correo y/o Password incorrecto");
  }
}

const insertUsuario = async (usuario: Usuario) => {

  let { email } = usuario;

  const isAlreadyExist = await UsuarioModel.findOne({ email });

  if( isAlreadyExist ) {
    throw new Error("El usuario ya existe");
  }

  
  const responseInsert = await UsuarioModel.create(usuario);
  return responseInsert;

  // if( !responseInsert ) {
  //   console.log('paso')
  //   throw new Error("No se pudo registrar el usuario");
  // }
}

const updateUsuario = async (id: string) => {

  const responseUpdate = await UsuarioModel.findByIdAndUpdate({ _id: id });
  return responseUpdate;
}

export {
  insertUsuario,
  updateUsuario,
  autenticateUsuario
}