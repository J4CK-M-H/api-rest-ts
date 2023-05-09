import mongoose, { Schema } from 'mongoose';
import { Usuario } from '../interfaces/usuario.interface';
import bcrypt from 'bcrypt';

const usuarioSchema = new Schema<Usuario>(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
    methods: {
       async  comparePassword(passwordForm: string){
        return await bcrypt.compare(passwordForm, this.password)
      }
    }
  });

usuarioSchema.pre('save', async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

});

usuarioSchema.methods.comparePassword = async function (passwordForm: string): Promise<boolean> {
  return await bcrypt.compare(passwordForm, this.password);
}

const UsuarioModel = mongoose.model('Usuario', usuarioSchema,);

export default UsuarioModel;