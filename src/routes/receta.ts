import { Router } from 'express'
import { crearReceta, deleteItem, obtenerItemById, obtenerItemsById, obtenerRecetas, updateItemById } from '../controllers/receta.controller';
import { checkAuth } from '../middleware/session';
import multerMiddleware from '../middleware/file';

const router = Router();

router.get('/obtener-recetas', checkAuth, obtenerRecetas );
router.get('/obtener-recetas/:id', obtenerItemsById);
router.get('/obtener-receta/:id', obtenerItemById );
router.post('/crear-receta', multerMiddleware.single('imagen') ,crearReceta );
router.put('/update-receta/:id', updateItemById );
router.delete('/remove-receta/:id', deleteItem );


export { router };