import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle";
import { autenticateUsuario, insertUsuario, updateUsuario } from "../services/usuario";


let registrar = async(request: Request, response: Response) => {

  let { body } = request;

  try {
    
    const responseUsuario = await insertUsuario(body);
    return response.status(201).json(responseUsuario);

  } catch (error) {
    handleHttp(response, 'ERROR_INSERTING_USUARIO', error);
  }

}

let autenticar = async({ body }: Request, response: Response) => {

  try {
    const usuarioResponse = await autenticateUsuario(body);
    return response.status(200).send(usuarioResponse);
  
  } catch (error: any) {
    handleHttp(response, error.message);
  }
  
  // return response.status(200).json({msg: "Autenticado"});
}

const session = async(request: Request, response: Response) => {

  const { user }  = <any>request;
  return response.json(user)
}


let updateItem = async({ params }: Request, response: Response) => {

  try {
    let { id } = params;
    const reponseUsuario = await updateUsuario(id);
    return response.status(200).json(reponseUsuario);
  } catch (error) {
    handleHttp(response, 'ERROR_UPDATE_USER')
  }
  
}

export {
  autenticar,
  registrar,
  updateItem,
  session
}