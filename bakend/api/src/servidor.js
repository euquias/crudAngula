const porta = 3003

const express = require('express')
const app = express()
const cors = require('cors')
const bodyparser = require('body-parser')
const bancodedados = require('./bancodedados')

app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors())

app.get('/produtos', (req, res, next) => {
    res.send(bancodedados.getProdutos())
})

app.get('./produtos/:id', (req, res, next) => {
    res.send(bancodedados.getProduto(req.params.id))
})
app.post('/produtos', (req, res, next) => {
    const produto = bancodedados.salvarProduto({
        nome: req.body.nome
    })
    res.send(produto)
})
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancodedados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome
    })
    res.send(produto)
})
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancodedados.excluirProduto(req.params.id)
    res.send(produto)
})
app.listen(porta, () => {
    console.log(`servidor executando na porta ${porta}.`)
})
