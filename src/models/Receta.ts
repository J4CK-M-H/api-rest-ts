import mongoose, { Schema } from 'mongoose';
import { Receta } from '../interfaces/receta.interface';

const recetaSchema = new Schema<Receta>(
  {
    titulo: {
      type: String,
      required: true,
      trim: true,
    },
    origen: {
      type: String,
      required: true,
      trim: true,
    },
    ingredientes: {
      type: String,
      required: true,
      trim: true,
    },
    preparacion: {
      type: String,
      required: true,
      trim: true,
    },
    imagen: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
)

const RecetaModel = mongoose.model('receta', recetaSchema);

export default RecetaModel;