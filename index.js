const express = require('express');
require('./services/passport');
//app object is defined here in index.js

const app = express();



const PORT = process.env.PORT || 5000;
app.listen(PORT);


// app.get('/', (req, res) => {
//     res.send({ bye: 'buddy'});
// });

//