const express = require('express');
const router = express.Router();

router.post('/:id', (req, res) => {
  res.json({
    "message": "This is Registration Route"
  })
})



module.exports = router;
