import 'dotenv/config';

import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { pathToFileURL } from 'node:url';
import adminRoutes from './routes/admin.js';
import authRoutes from './routes/auth.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);

app.use((req, res) => {
	res.status(404).json({ message: 'Route not found' });
});

app.use((error, req, res, next) => {
	console.error(error);
	res.status(error.status || 500).json({
		message: error.status ? error.message : 'Internal server error',
	});
});

async function startServer() {
	if (!process.env.JWT_SECRET) {
		throw new Error('JWT_SECRET must be set in the .env file');
	}

	await mongoose.connect(
		process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/exercise3'
	);

	const port = process.env.PORT || 3000;
	app.listen(port, () => {
		console.log(`Server running on port ${port}`);
	});
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
	startServer().catch((error) => {
		console.error(`Unable to start server: ${error.message}`);
		process.exitCode = 1;
	});
}

export default app;
