const {Router} = require ("express")

const router = Router()

router.get("/", (req, res) => {
     res.send("ola mundão ")
})

module.exports= router