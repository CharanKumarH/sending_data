const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Endpoint to send JSON data from file
app.get('/data', (req, res) => {
  const filePath = path.join(__dirname, 'json_data.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(JSON.parse(data));
  });
});

// Endpoint to receive modified data
app.post('/modify', (req, res) => {
  const modifiedData = req.body;
  console.log('Received modified data:', modifiedData);
  res.send('Data received and logged 22 ');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
