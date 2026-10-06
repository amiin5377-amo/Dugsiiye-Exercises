const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const bookRoutes = require('./Routes/books');

dotenv.config();

app.use(express.json());
app.use('/books', bookRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected locally'))
  .catch((err) => console.error('❌ Connection error:', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
