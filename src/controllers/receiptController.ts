import { Request, Response } from 'express';
import { processReceiptService, getPointsService } from '../services/receiptService';
import { Receipt } from '../models/Receipt';

// Process receipt and return an ID
export const processReceipt = (req: Request, res: Response) => {
  const receipt: Receipt = req.body;
  try {
    const receiptId = processReceiptService(receipt);
    res.status(200).json({ id: receiptId });
  } catch (error) {
    res.status(400).json({ error: 'Invalid receipt data' });
  }
};

// Get points for a given receipt ID
export const getPoints = (req: Request, res: Response) => {
  console.log('get points');
  const { id } = req.params;
  console.log(id);
  try {
    const points = getPointsService(id);
    if (points === undefined) {
      res.status(404).json({ error: 'Receipt not found' });
    } else {
      res.status(200).json({ points });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error calculating points' });
  }
};
