const express = require ("express")

const rotaLivros= require("./rotas/livro")

const app = express()
app.use('/livro', rotaLivros)
const port= 8000

app.listen(port, () => {
    console.log(`escutado a  porta ${port}`)
})