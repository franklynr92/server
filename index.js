const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');
//app object is defined here in index.js

const app = express();

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);


// app.get('/', (req, res) => {
//     res.send({ bye: 'buddy'});
// });

//