import { Router } from 'express'
import { crearReceta, deleteItem, obtenerItemById, obtenerRecetas, updateItemById } from '../controllers/receta.controller';
import { checkAuth } from '../middleware/session';

const router = Router();

router.get('/obtener-recetas', checkAuth ,obtenerRecetas );
router.post('/obtener-receta/:id', obtenerItemById );
router.post('/crear-receta', crearReceta );
router.put('/update-receta/:id', updateItemById );
router.delete('/remove-receta/:id', deleteItem );


export { router };