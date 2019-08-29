getNav()
function getNav() {
        $.get('/navegacao', function(data){
            if(data != null){
                //dados = data = typeof data == 'string' ? JSON.parse(data) : data;
                //console.log(data)
                showNav(data)
            }
            else{
                console.log('Sem dados recebidos')
            }
        })
    }
function showNav(data){
    $.each(data, function (indexInArray, itens) { 
        //console.log(indexInArray, itens)
        //console.log(itens.nome_url)
        //console.log(itens.url_url)
        //console.log("Entrei no showNav com ou sem dados ? " + itens.nome_url, itens.url_url)
        // Localizar Elemento nav
        var secaoNavega = document.getElementById('menu')
        // Criar o Elemento lista
        var lista = document.createElement('li')
        // Insere Classe na Lista criada
        lista.className += "itensMenu"
        // Criar Elemento ancora
        var criaA = document.createElement('a')
        // Atribuir url a href, target=_blank e texto do link
        criaA.href = itens.url_url
        criaA.target = '_blank'
        criaA.innerText = itens.nome_url
        // Fechar lista e ancora
        lista.appendChild(criaA)
        // Fechar secaoNavega
        secaoNavega.appendChild(lista)
    });
}