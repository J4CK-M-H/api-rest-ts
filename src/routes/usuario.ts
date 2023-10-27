import { Router } from 'express'
import { autenticar, registrar, session } from '../controllers/usuario.controller';
import { checkAuth } from '../middleware/session';
const router = Router();

router.get('/session', checkAuth ,session );
router.post('/login', autenticar );
router.post('/registrar', registrar );

export { router };