const http = require('http');
const express = require('express');
const app = express();
const candidateRoutes = require('./routes/candidates');

app.get('/status', (req, res) => {
	res.send('Running Successfully!');
});

app.use('/candidates', candidateRoutes);

// Specify the port to listen on
const port = 3000;

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
