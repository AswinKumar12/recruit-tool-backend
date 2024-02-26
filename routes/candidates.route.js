module.exports = (app) => {
	const express = require('express');
	const router = express.Router();
	const candidates = require('./../controllers/candidates.controller');
	// candidates module CRUD operations
	router.get('/get-all-candidates', candidates.getAllCandidates);
	router.get('/get-candidate-by-id/:id', candidates.getCandidateDetailsById);
	router.post('/add-candidate', candidates.addCandidate);
	router.put('/update-candidate-by-id/:id', candidates.updateCandidate);
	router.delete('/delete-candidate-by-id/:id', candidates.deleteCandidate);
	app.use('/api', router);
};