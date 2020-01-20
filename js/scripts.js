let buttonClick = document.getElementById('btn')
let board = document.getElementById('board')

buttonClick.addEventListener('click', ()=>{
    fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey=e6a861b23a474a97af3e647718c37557"). then((response)=>{
        return response.json();

    }).then(json=>{
        console.log(json.articles)
        mostrarNaTela(json.articles);
    })
})

let mostrarNaTela = listaNoticias =>{
// for(let noticia of listaNoticias)

    listaNoticias.forEach(function(noticia, posicao){

        let card = ` <div class="card text-center" style="width: 18rem;">
        <img class="card-img-top" src="${noticia.urlToImage}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${noticia.title}</h5>
            <p class="card-text">${noticia.description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`
        board.innerHTML += card;
    })
}

// ()=>"solução direta sem return";
// ()+>{
//     bla bla
//     return"alguma coisa"
// }

// parametro =>{

// }

// (a,b)=>asadasd