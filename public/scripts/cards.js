getCards()
function getCards() {
        $.get('/vpncards', function(data){
            if(data != null){
                var newdata0 = [];
                var newdata1 = [];
                var newdata2 = [];
                var conta0, conta1, conta2 = 0;
                for ( i = 0; i < data.length; i++) {
                    console.log('Imprime itens do FOR: ', data[i].nome_url_vpn, data[i].nome_url_vpn, data[i].tipo_acesso);
                    // Contar quantos tipo_acesso tem para cada tipo_acesso
                    if (data[i].tipo_acesso == "0") {
                        conta0 ++;
                    } else if (data[i].tipo_acesso == "1") {
                        conta1 ++;
                    } else if (data[i].tipo_acesso == "2") {
                        conta2 ++;
                    }
                } // FIM SOMA012
                console.log('POS SOMA012', data[0]);
                if (data[i].tipo_acesso == "0") {
                    for (j = 0; j < conta0; j++) {
                        // console.log('IF TIPO ACESSO = 0: ', data[i].nome_url_vpn, data[i].nome_url_vpn, data[i].tipo_acesso);
                        newdata0.push( {
                            'new_nome_url_vpn' : data[j].nome_url_vpn,
                            'new_url_url_vpn' : data[j].nome_url_vpn,
                            'new_tipo_acesso' : data[j].tipo_acesso
                            });
                    }
                    // Montar o CARD0
                    showCards0(newdata0);
                } else if (data[i].tipo_acesso == "1") {
                    for (j = 0; j < conta1; j++) {
                        // console.log('IF TIPO ACESSO = 1: ', data[i].nome_url_vpn, data[i].nome_url_vpn, data[i].tipo_acesso);
                        newdata1.push( {
                            'new_nome_url_vpn' : data[j].nome_url_vpn,
                            'new_url_url_vpn' : data[j].nome_url_vpn,
                            'new_tipo_acesso' : data[j].tipo_acesso
                        }); 
                    }
                        // Montar CARD1
                        console.log('MONTAR CARD1');
                } else if (data[i].tipo_acesso == "2") {
                    for (j = 0; j < conta2; j++) {
                        // console.log('IF TIPO ACESSO = 2: ', data[i].nome_url_vpn, data[i].nome_url_vpn, data[i].tipo_acesso);
                        newdata2.push( {
                            'new_nome_url_vpn' : data[i].nome_url_vpn,
                            'new_url_url_vpn' : data[i].nome_url_vpn,
                            'new_tipo_acesso' : data[i].tipo_acesso
                        }); 
                    }
                        // Montar CARD2
                        console.log('MONTAR CARD2');
                } else {
                    console.log('FIM');
                }
            } else {
                console.log('Sem dados recebidos');
            }
        })
    }

function showCards0(data){
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