//Criei uma função de clique, para quando estiver no mobile
//o Usuário visualizar os links do menu;
$('.btn-menu').click(function () {
    $('#menu-nav').toggleClass('ativo');
});

//Outra função de click, para o usuário visualizar os itens no carrinho.
$('.show-cart').click(function () {
    $('.mini-cart').toggleClass('ativo');
});

//Aqui, estou puxando os valores da API
//Fez um forEach para rodar em cada item do json,
//dei um append para deixar dinâmico, e adicionar os itens nessa formatação.
const produtos = fetch('./products.json');
produtos.then(resolved => resolved.json()).then(body => {
    $(body.cart.item).each(function(a){
        html =                     '<div class="item-cart">'+
                                    '<a href="javascript:void(0)">'+
                                        '<div class="photo">'+
                                            '<img src="/src/assets'+ body.cart.item[a].image +'" alt="" />'+
                                        '</div>'+
                                        '<div class="item-info">'+
                                            '<div class="item-name">'+
                                                '<span>'+ body.cart.item[a].name +'</span>'+
                                            '</div>'+
                                            '<div class="caixa-price-qtd">'+
                                                '<div class="item-qtd">'+
                                                    '<span>Qtd: '+ body.cart.item[a].quantity +'</span>'+
                                                '</div>'+
                                                '<div class="item-price">'+
                                                    '<span>'+ body.cart.item[a].bestPriceFormated +'</span>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</a>'+
                                '</div>';
        $('.itens').append(html);
        const valorTotal = body.cart.item[a].bestPrice;
        $('.total-itens > span > strong').append(valorTotal);
    });
})