import expres from 'express';
import { signin, signup } from '../controllers/user.js';

const router = expres.Router();

router.post('/signin', signin);
router.post('/signup', signup);

export default router;
