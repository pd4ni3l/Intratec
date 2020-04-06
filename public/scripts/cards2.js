getCards()
function getCards() {
        $.get('/vpncards', function(data){
            if(data != null){
                console.log('Entrei no getCards', data);
                showCards(data);
            }
            else{
                console.log('Sem dados recebidos');
            }
        })
    }

function showCards(data){
    console.log( 'entrei no showCard');
    $.each(data, function (indexInArray, itens) { 
        var secaoCards = document.getElementById('cards');
        // Criar o Elemento DIV ROW
        var divRow = document.createElement('div');
        divRow.className += "row";
        divRow.id += "row";
        // Criar DIV CLASS COLUMN
        var divColumn = document.createElement('div');
        divColumn.className += "column";
        // H5
        var criaH5 = document.createElement('h5');
        criaH5.innerText += "H5 H5";
        // P
        var criaP = document.createElement('p');
        criaP.innerText += "NOME URL VPN";
        // A HREF
        var criaA = document.createElement('a');
        // Atribuir url a href, target=_blank e texto do link
        criaA.href = itens.url_url_vpn;
        criaA.target = '_blank';
        criaA.innerText = itens.nome_url_vpn;
        // Fecha divColumn/divRow
        criaP.appendChild(criaA);
        criaH5.appendChild(criaP);
        divColumn.appendChild(criaH5);
        divRow.appendChild(divColumn);
        secaoCards.appendChild(divRow);
    });
}