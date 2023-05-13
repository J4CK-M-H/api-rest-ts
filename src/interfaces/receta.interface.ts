import { ObjectId } from "mongoose";

export interface Receta {
  titulo: string;
  origen: string;
  ingredientes: string;
  preparacion: string;
  imagen: string;
  creador?: ObjectId;
}