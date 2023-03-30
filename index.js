import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import routes from './routes/routes.js';

const PORT = process.env.PORT || 5000;
config();
const app = express();

// Middlware
app.use(cors());
app.use(express.json());

// Routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server working on port ${PORT}`);
});
