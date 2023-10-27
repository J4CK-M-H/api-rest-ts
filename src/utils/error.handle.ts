import { Response } from "express";

const handleHttp = (response: Response, error: string, errorMessage?: any) => {
  console.log(error);
  return response.status(500).send({ message: error });
}


export { handleHttp }