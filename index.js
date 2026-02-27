const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Beginner Backend!');
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

const echoRouter = require('./routes/echo');
app.use('/api/echo', echoRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
