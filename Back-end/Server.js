// server.js
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model('User', userSchema);

app.use(express.json());

// Signup
app.post('/api/signup', async (req, res) => {
  console.log('Received signup request');
  const { username, password } = req.body;
  console.log('Username:', username);
  console.log('Password:', password);
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  res.json({ message: 'User created successfully' });
});

// Login
app.post('/api/login', async (req, res) => {
  console.log('Received login request');
  const { username, password } = req.body;
  console.log('Username:', username);
  console.log('Password:', password);
  const user = await User.findOne({ username });
  if (!user) {
    res.status(401).json({ message: 'Invalid username or password' });
  } else {
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      res.status(401).json({ message: 'Invalid username or password' });
    } else {
      res.json({ message: 'Logged in successfully' });
    }
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});