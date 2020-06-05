$('.btn-menu').click(function () {
    $('#menu-nav').toggleClass('ativo');
});

$('.show-cart').click(function () {
    $('.mini-cart').toggleClass('ativo');
});


const produtos = fetch('./products.json');
produtos.then(resolved => resolved.json()).then(body => {
    const nomeProduto = document.querySelector('.item-name > span');
    const quantidade = document.querySelector('.item-qtd > span');
    const price = document.querySelector('.item-price > span');
    const imgProduto = document.querySelector('.photo > img');
    imgProduto.src = '/src/assets' + body.cart.item[0].image;
    nomeProduto.innerText = body.cart.item[0].name;
    quantidade.innerText = 'Qtd: ' + body.cart.item[0].quantity;
    price.innerText = body.cart.item[0].bestPriceFormated;
})

const itensCart = document.querySelectorAll('.item-cart');
const arrayCart = Array.from(itensCart);

console.log(arrayCart);