import { Response } from "express";

const handleHttp = (response: Response, error: string, errorMessage?: any) => {
  console.log(errorMessage);
  return response.status(500).send({ error });
}


export { handleHttp }