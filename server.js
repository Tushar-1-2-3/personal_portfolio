const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// MongoDB Connection
const MONGODB_URI = 'mongodb+srv://Tushar10:Tushar10@cluster0.d0vr0nu.mongodb.net/?appName=Cluster0';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model('Contact', contactSchema);

// Middleware
app.use(cors());
app.use(express.json());

// API Route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Create new contact
    const newContact = new Contact({
      name,
      email,
      message
    });

    // Save to MongoDB
    await newContact.save();

    console.log('Contact saved:', newContact);

    res.status(201).json({ 
      success: true, 
      message: 'Contact form submitted successfully' 
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error saving contact form' 
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Contact endpoint: http://localhost:${PORT}/api/contact`);
});
