const express = require('express');

const server = express();
const PORT = 2222;

const apiRouter = require('./routes/api-router.js');

server.use(express.static(__dirname + '/public'));

server.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/public/index.html'))
});

server.use('/api', apiRouter);

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});
