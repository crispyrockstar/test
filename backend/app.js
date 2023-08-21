// backend/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/router');

const app = express();
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/SportsBookingSystem', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(express.json());
app.use(cors());
app.use(router);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});