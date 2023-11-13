const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

let groceries = [
  { id: 1, name: 'Apple', price: 1.5 },
  { id: 2, name: 'Banana', price: 0.75 },
  {id: 3, name: 'coconet', price: 2.75 }
  // Add more groceries as needed
];

app.get('/groceries', (req, res) => {
  res.json(groceries);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

