const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cycleRoutes = require('./src/routes/cycleRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/cycles', cycleRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
