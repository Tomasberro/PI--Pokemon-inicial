const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('soy el get de types')
  })




module.exports = router;