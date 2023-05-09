import { Router } from 'express'
import { autenticar, registrar } from '../controllers/usuario.controller';

const router = Router();

router.post('/login', autenticar );
router.post('/registrar', registrar );


export { router };