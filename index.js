const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Load car data
const loadCarData = () => {
  const data = fs.readFileSync(path.join(__dirname, 'data', 'cars.json'));
  return JSON.parse(data);
};

// Endpoint to get cars with the most blue cars by town
app.get('/api/most-blue-cars', (req, res) => {
  const cars = loadCarData();
  const townCodes = {
    'CJ': 'Paarl',
    'CY': 'Bellville',
    'CL': 'Stellenbosch',
    'CK': 'Malmesbury',
    'CA': 'Cape Town',
    'CF': 'Kuilsriver'
  };

  const color = 'blue';
  const townsCount = {};

  cars.forEach(car => {
    const townCode = car.reg_number.substring(0, 2);
    if (car.color === color) {
      if (!townsCount[townCode]) {
        townsCount[townCode] = 0;
      }
      townsCount[townCode]++;
    }
  });

  const mostBlueTownCode = Object.keys(townsCount).reduce((a, b) => townsCount[a] > townsCount[b] ? a : b);
  const mostBlueTown = townCodes[mostBlueTownCode] || 'Unknown';

  res.json({ town: mostBlueTown, count: townsCount[mostBlueTownCode] });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
