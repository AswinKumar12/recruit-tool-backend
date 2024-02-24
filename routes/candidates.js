const express = require('express');
const router = express.Router();

router.get('/get-all-candidates', (req, res) => {
    res.send('all candidates')
});


module.exports = router;