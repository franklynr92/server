const express = require('express');
require('./services/passport');

const app = express();
//app object is defined here in index.js

require('./routes/authRoutes')(app);
//second set of paranthesis immediately invokes the function app IIF

const PORT = process.env.PORT || 5000;
app.listen(PORT);


// app.get('/', (req, res) => {
//     res.send({ bye: 'buddy'});
// });

//