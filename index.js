const express = reuqire('express');
const app = epxress();

app.get('/', (req, res) => {
    res.send({ hi: 'there'});
});

app.listen(5000);
