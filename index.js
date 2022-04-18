const bdProdutos = require('./repository/ProdutoRepository');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Definindo a template engine e a pasta das views
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home', {saudacao: 'Olá, seja bem vindo à LOJA'});
});
  
app.get('/produto/produto-novo', (req, res) => {
    res.render('produto/produto-novo');
});

app.post('/produto/produto-novo', (req, res) => {
    let p = req.body;
    bdProdutos.addProduto(p);
    // res.render('produto/produto-novo-sucesso', {novoProduto: p});
    res.redirect('/produto/produto-listar?msg=Produto cadastrado');
});

app.get('/produto/produto-listar', (req, res) => {
    res.render('produto/produto-listar', {produtos: bdProdutos.getProdutos(), msg: req.query.msg});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});