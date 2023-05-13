import { Receta } from "../interfaces/receta.interface"
import RecetaModel from "../models/Receta"


const insertReceta = async (receta: Receta) => {

  const responseInsert = await RecetaModel.create(receta);
  return responseInsert;
}

const getRecetaById = async (id: string) => {

  const responseReceta = await RecetaModel.findById(id);
  return responseReceta;
  // if( responseReceta ) {
    // return responseReceta;
  // }

  // throw new Error('Receta no encontrada');
}

const updateRecetaById = async (id: string, data: Receta) => {
  // el tercer parametro sirve para que te devuelve el objeto receta ya actualizado
  const responseUpdate = await RecetaModel.findByIdAndUpdate(id, data, { new: true });
  return responseUpdate;

}

const deleteRecetaById = async (id: string) => {

  const responseDelete = await RecetaModel.findByIdAndDelete(id);
  return responseDelete;
}

const getRecetasById = async(_id: string) => {

  // console.log('id: '+ _id);
  
  const reponseGet = await RecetaModel.find({ creador: _id});
  return reponseGet;
}

export {
  insertReceta,
  getRecetaById,
  updateRecetaById,
  deleteRecetaById,
  getRecetasById
}