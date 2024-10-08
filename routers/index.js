const router = require('express').Router()
const Controller = require("../controllers/index")

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.post("login", Controller.login)

module.exports = router