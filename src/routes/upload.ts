import { Router } from 'express'
import multerMiddleware from '../middleware/file';
import { getFile } from '../controllers/upload.controller';
import { checkAuth } from '../middleware/session';

const router = Router();

router.post('/', checkAuth ,multerMiddleware.single('imagen'), getFile );

export { router };