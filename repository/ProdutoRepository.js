var produto_id = 0;
var produtos = [
    {
        nome: 'A morte de Ivan Illitch',
        categoria: 'livro',
        descricao: 'autor: Tolstoy',
        preco: '50',
        id: produto_id+=1
    }, {
        nome: 'O retrato de Dorian Gray',
        categoria: 'livro',
        descricao: 'autor: Oscar Wilde',
        preco: '40',
        id: produto_id+=1
    }];

function addProduto(produto){
    produto.id = produto_id+=1;
    produtos.push(produto);
}

function getProdutos(){
    return produtos;
}

exports.addProduto = addProduto;
exports.getProdutos = getProdutos;