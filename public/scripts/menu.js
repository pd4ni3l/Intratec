getNav()
function getNav() {
        $.get('/navegacao', function(data){
            if(data != null){
                showNav(data)
            }
            else{
                console.log('Sem dados recebidos')
            }
        })
    }
function showNav(data){
    $.each(data, function (indexInArray, itens) { 
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