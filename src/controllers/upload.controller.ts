import { Request, Response } from "express"
import { uploadFile } from "../services/storage";
import { RequestWithUser } from "../interfaces/req-extends.interface";
import { Storage } from '../interfaces/storage.interface';
import { handleHttp } from "../utils/error.handle";

const getFile = async(request: RequestWithUser, response: Response) => {

  try {
    const { user,file } = request;
    // Asercion de tipo: repasar este concepto
    const data: Storage = {
      fileName: `${file?.filename}`,
      path: `${file?.path}`,
      idUser: user?.id,
    }
    const responseItem = await uploadFile(data);
    return response.send(responseItem);
    
  } catch (e) {
    handleHttp(response, 'ERROR_STORAGE_UPLOAD');
  }
}

export {
  getFile
}