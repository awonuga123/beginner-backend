const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const payload = req.body;
  res.json({ received: payload });
});

module.exports = router;
