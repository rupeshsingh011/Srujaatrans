const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');
const Contact = require('./models/Contact');

const authRoutes = require('./routes/auth');
const uploadRoutes = require('./routes/upload');
const siteContentRoutes = require('./routes/siteContent');
const makeListRouter = require('./routes/makeListRouter');
const Review = require('./models/Review');
const WorkItem = require('./models/WorkItem');
const Certification = require('./models/Certification');
const Skill = require('./models/Skill');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;
if (MONGODB_URI) {
  mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Cloud'))
    .catch((err) => console.error('MongoDB connection error:', err));
} else {
  console.warn('MONGODB_URI is not defined in .env file. Skipping database connection.');
}

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to your email provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/contact', async (req, res) => {
  const fullName = req.body['Full Name'];
  const email = req.body['Email'];
  const phone = req.body['Phone'];
  const sendMessage = req.body['Send Message'];

  if (!fullName || !email || !sendMessage) {
    return res.status(400).json({ error: 'Full Name, email, and message are required.' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Sending it to yourself
    subject: `New Contact Form Submission from ${fullName}`,
    html: `
      <h3>New Contact Details:</h3>
      <ul>
        <li><strong>Full Name:</strong> ${fullName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
      </ul>
      <h3>Message:</h3>
      <p>${sendMessage}</p>
    `,
  };

  try {
    // Save to MongoDB
    if (mongoose.connection.readyState === 1) {
      const newContact = new Contact({ 
        "Full Name": fullName, 
        "Email": email, 
        "Phone": phone, 
        "Send Message": sendMessage 
      });
      await newContact.save();
    }

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent and saved successfully!' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ success: false, error: 'Failed to process request. Please try again later.' });
  }
});

app.use('/api/admin', authRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/site-content', siteContentRoutes);
app.use('/api/reviews', makeListRouter(Review));
app.use('/api/work-items', makeListRouter(WorkItem));
app.use('/api/certifications', makeListRouter(Certification));
app.use('/api/skills', makeListRouter(Skill));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
