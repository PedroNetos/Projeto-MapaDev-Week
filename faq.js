//BUSCAR OS ITEMS NA TELA
const ItensPerguntasERespostas = document.querySelectorAll('.item')

// ENTENDER QUE O ITEM FOI CLICADO
ItensPerguntasERespostas.forEach(function(item){ 
    item.addEventListener('click', function() {
        //VERIFICAR SE A PERGUNTA CLICADA ESTA ATIVA
            const estaAtiva = item.classList.contains('ativo')

        //SE A PERGUNTA NAO ESTA ATIVA
        if(!estaAtiva) {
                //EU PRECISO FECHAR TODAS
            ItensPerguntasERespostas.forEach(function(item) {
                item.classList.remove('ativo')
            })

                //ABRIR A RESPOSTA ATUAL
            item.classList.add('ativo')
        //SE A PERGUNTA ESTIVER ATIVA
        } else{
            //DESATIVAR (REMOVERIA A CLASS ATIVO)
            item.classList.remove('ativo')
        }
    })
})