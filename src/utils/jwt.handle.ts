import jwt from 'jsonwebtoken';
import "dotenv";

const KEY = process.env.SECRET_KEY || 'secret';

const generarToken = (id: string) => {
 
  const token = jwt.sign({id}, KEY, { expiresIn: "4h" });

  return token;

}

export {
  generarToken,
}