import express, { Application } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import compression from 'compression';
import connectDB from './utils/connectDB';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import keygen from './routes/keygenRoutes';
import { errorHandler } from './middlewares/errorHandler';
import { requestLogger } from './middlewares/requestLogger';

dotenv.config();

const app: Application = express();

// Connect to the database
connectDB();

// Middleware
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(requestLogger);

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.use('/api/keygen', keygen)

// Error Handling Middleware
app.use(errorHandler);

export default app;
