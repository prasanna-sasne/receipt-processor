import { Router } from 'express';
import { processReceipt, getPoints } from '../controllers/receiptController';

const router = Router();

router.post('/process', processReceipt);
router.get('/:id/points', getPoints);

export default router;