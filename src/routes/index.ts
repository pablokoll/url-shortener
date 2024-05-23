import { Router } from 'express';
import shortenerRouter from './shortener';

const router: Router = Router();
router.use('/', shortenerRouter);

export default router;