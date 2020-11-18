const express = require('express');
const cors = require('cors');
const fileData = require('./src/data/test');

const app = express();

app.use(cors());
app.use('/pdf', express.static(__dirname + '/src/data/'));
app.get('/fileData', (req, res) => {
	res.send(fileData);
});

app.listen(8000, () => console.log(`Listening on ${ 8000 }`));