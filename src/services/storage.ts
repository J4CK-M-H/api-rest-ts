import { Storage } from "../interfaces/storage.interface";
import storageModel from "../models/Storage"


const uploadFile = async(data: Storage) => {

  const responseUpload = new storageModel(data);
  await responseUpload.save();
  return responseUpload;

}

export {
  uploadFile
}