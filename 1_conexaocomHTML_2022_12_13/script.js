// Alterando o texto das redes sociais
const formTitle = document.getElementById('text')

console.log(formTitle)
console.log(formTitle.innerText)

formTitle.innerText = 'Nos siga em:'

//Armazenando um id
const expectations = document.getElementById ('expec')
console.log(expectations)

//Armazenando um id lista de links e pegando o filho da lista
const navElements = document.getElementsByClassName('elementos_nav')

console.log(navElements)
console.log(navElements[0].childNodes[1].innerText)

//Selecionando um texto sem uma class id
const navElements1 = document.getElementsByClassName('elementos_nav')

console.log(navElements1[0].getElementsByTagName ('a')[0].innerText)
navElements1[0].getElementsByTagName('a')[0].innerText = 'Teste'

const postAuthor = document.getElementById('post02')

console.log(postAuthor.children[1].innerHTML)

postAuthor.children[1].innerHTML = '<strong>Autor:</strong> Bonito'

//Mudando um filho dependendo da ação do usuário
//console.log(postAuthor[1].childNodes)
console.log(navElements)

function imprimir(listaElementos) {
    for (let i=0; i < listaElementos.length; i++){
        console.log(listaElementos[i].childNodes[1].innerText)
    }
}

imprimir(navElements)


//Brincando com objetos
const array = ['maracuja,2,3']

const array_user = ['clayton', 6, 42, 'nenhuma', 'peixe']

const user = {
    username: 'clayton',
    sort: 6,
    idade: 42,
    frutaRuim: 'nenhuma'
    comidasFavorita: ['comidadaminhamãe', 'peixe', 'sanduíche']
}

//console.log(array_user[2])
//console.log(user['username'])
console.log(user.comidasFavorita[1])