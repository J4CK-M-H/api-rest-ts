import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { Storage } from '../interfaces/storage.interface';

const storageSchema = new Schema<Storage>(
  {
    fileName: {
      type: String,
    },
    path: {
      type: String,
    },
    idUser: {
      type: String,
    }
  },
  {
    timestamps: true,
  });


const storageModel = mongoose.model('storage', storageSchema,);

export default storageModel;