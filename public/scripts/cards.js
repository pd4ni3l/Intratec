getCards()
function getCards() {
    $.get('/vpncards', function (data) {
        if (data != null) {
            var newdata0 = [];
            var newdata1 = [];
            var newdata2 = [];
            var conta0 = 0;
            var conta1 = 0;
            var conta2 = 0;
            for (i = 0; i < data.length; i++) {
                // console.log('Imprime itens do FOR: ', data[i].nome_url_vpn, data[i].nome_url_vpn, data[i].tipo_acesso);
                // Contar quantos tipo_acesso tem para cada tipo_acesso
                if (data[i].tipo_acesso == "0") {
                    conta0++;
                } else if (data[i].tipo_acesso == "1") {
                    conta1++;
                } else if (data[i].tipo_acesso == "2") {
                    conta2++;
                }
            } // FIM CONTADOR

            for (i = 0; i < conta0; i++) {
                if (data[i].tipo_acesso == "0") {
                    newdata0.push({
                        'new_nome_url_vpn': data[i].nome_url_vpn,
                        'new_url_url_vpn': data[i].nome_url_vpn,
                        'new_tipo_acesso': data[i].tipo_acesso
                    });
                }
                // delete data[i];
            }
            // Montar o CARD0
            showCards0(newdata0);

            for (i = conta0; i < conta1 + conta0; i++) {
                if (data[i].tipo_acesso == "1") {
                    newdata1.push({
                        'new_nome_url_vpn': data[i].nome_url_vpn,
                        'new_url_url_vpn': data[i].nome_url_vpn,
                        'new_tipo_acesso': data[i].tipo_acesso
                    });
                }
            }
            // Montar CARD1
            // console.log('CARD 1: ', newdata1);
            showCards1(newdata1);

            for (i = conta1 + conta0; i < conta2 + conta1 + conta0; i++) {
                if (data[i].tipo_acesso == "2") {
                    newdata2.push({
                        'new_nome_url_vpn': data[i].nome_url_vpn,
                        'new_url_url_vpn': data[i].nome_url_vpn,
                        'new_tipo_acesso': data[i].tipo_acesso
                    });
                }
            }
            // Montar CARD2
            // console.log('MONTAR CARD2', newdata2);
            showCards2(newdata2);
        } else {
            console.log('Sem dados recebidos');
        }
    });
}
function showCards0(data) {
    $.each(data, function (indexInArray, itens) {
        // console.log(itens);
        var secaoCards = document.getElementById('card0');
        // P
        var criaH5 = document.createElement('h5');
        criaH5.innerText += itens.new_nome_url_vpn;
        criaH5.style = 'padding-left: 0px; margin-bottom: 0px;';
        // A HREF
        var criaA = document.createElement('a');
        criaA.href = itens.new_url_url_vpn;
        criaA.target = '_blank';
        criaA.innerText = itens.new_url_url_vpn;
        criaA.style = 'font-size: 10px;';
        var criaBr = document.createElement('p');
        // Fecha divColumn/divRow
        // criaH5.appendChild(criaA);
        secaoCards.appendChild(criaBr);
        secaoCards.appendChild(criaH5);
        secaoCards.appendChild(criaA);
    });
}
function showCards1(data) {
    $.each(data, function (indexInArray, itens) {
        // console.log(itens);
        var secaoCards = document.getElementById('card1');
        // P
        var criaH5 = document.createElement('h5');
        criaH5.innerText += itens.new_nome_url_vpn;
        criaH5.style = 'padding-left: 0px; margin-bottom: 0px;';
        // A HREF
        var criaA = document.createElement('a');
        criaA.href = itens.new_url_url_vpn;
        criaA.target = '_blank';
        criaA.innerText = itens.new_url_url_vpn;
        criaA.style = 'font-size: 10px;';
        var criaBr = document.createElement('p');
        // Fecha divColumn/divRow
        // criaH5.appendChild(criaA);
        secaoCards.appendChild(criaBr);
        secaoCards.appendChild(criaH5);
        secaoCards.appendChild(criaA);
    });
}

function showCards2(data) {
    $.each(data, function (indexInArray, itens) {
        // console.log(itens);
        var secaoCards = document.getElementById('card2');
        // P
        var criaH5 = document.createElement('h5');
        criaH5.innerText += itens.new_nome_url_vpn;
        criaH5.style = 'padding-left: 0px; margin-bottom: 0px;';
        // A HREF
        var criaA = document.createElement('a');
        criaA.href = itens.new_url_url_vpn;
        criaA.target = '_blank';
        criaA.innerText = itens.new_url_url_vpn;
        criaA.style = 'font-size: 10px;';
        var criaBr = document.createElement('p');
        // Fecha divColumn/divRow
        // criaH5.appendChild(criaA);
        secaoCards.appendChild(criaBr);
        secaoCards.appendChild(criaH5);
        secaoCards.appendChild(criaA);
    });
}