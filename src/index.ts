import express, { Request, Response } from 'express';
import receiptRoutes from './routes/receiptRoutes';

const app = express();
app.use(express.static('public'));

// Middleware
app.use(express.json());

// Define the root route ("/")
app.get('/', (req, res) => {
  res.send('Welcome to the Receipt Processor API!');
});

// Routes
app.use('/api/receipts', receiptRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});