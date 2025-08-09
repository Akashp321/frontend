import express, { json } from 'express';
import cors from 'cors';
const app = express();
const port = 5000;

app.use(cors());
app.use(json());

const users = [
  { email: 'test@example.com', password: '1234', name: 'Test User', registerno: '001' }
];

app.post('/userval/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.post('/userval/register', (req, res) => {
  const { email, password, name, registerno } = req.body;
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: 'Email already exists' });
  }
  users.push({ email, password, name, registerno });
  res.status(201).json({ message: 'User registered successfully' });
});

app.get('/userval/allusers', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
