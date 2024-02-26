const http = require('http');
const express = require('express');
const app = express();
const candidateRoutes = require('./routes/candidates.route');

app.get('/api/health-check', (req, res) => {
	res.send({ success: true, message: 'Service is Running successfully' });
});

require('./routes')(app);

// Specify the port to listen on
const port = 3000;

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
