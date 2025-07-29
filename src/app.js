const express = require('express');
const cors = require('cors');
const authRoutes = require('./modules/auth/auth.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('🟢 UpSkillPro API is running');
});

module.exports = app;