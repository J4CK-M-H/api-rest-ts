import { Request, Response } from "express";
import Receta from "../models/Receta";
import { deleteRecetaById, getRecetaById, insertReceta, updateRecetaById } from "../services/receta";
import { handleHttp } from "../utils/error.handle";


const crearReceta = async ({ body }: Request, response: Response) => {

  try {
    const responseReceta = await insertReceta(body);
    return response.status(201).json(responseReceta);
    
  } catch (error) {
    return handleHttp(response, 'ERROR_INSERT_RECETA');
  }

}

const obtenerRecetas = async (request: Request, response: Response) => {

  try {
    const recetas = await Receta.find();
    return response.json(recetas);
  } catch (error) {
    handleHttp(response, 'ERROR_OBTENER_RECETAS');    
  }
}

const obtenerItemById = async (request: Request,response: Response) => {

  const { id } = request.params;

  try {
    const responseReceta = await getRecetaById(id);
    const data = responseReceta 
      ? (responseReceta) 
      : {msg: "Receta no encontráda"}
    return response.status(200).json(data);
    
  } catch (error) {
    return handleHttp(response, 'ERROR_GET_RECETA', error);

  }

};

const updateItemById = async( request: Request, response: Response ) => {

  const { id } = request.params;
  try {
    const responseReceta = await updateRecetaById(id, request.body);
    return response.status(200).json(responseReceta);
    
  } catch (error) {
    handleHttp(response,'ERROR_UPDATE_RECETA');
  }

}

const deleteItem = async( request: Request, response: Response ) => {

  const { id } = request.params;
  try {
    await deleteRecetaById(id);
    return response.status(200).json({msg: "Receta eliminada" });
  } catch (error) {
    handleHttp(response, 'ERROR_DELETE_RECETA');      
  }
}

export {
  obtenerItemById,
  obtenerRecetas,
  crearReceta,
  updateItemById,
  deleteItem
}
