let buttonClick = document.getElementById('btn')

buttonClick.addEventListener('click', ()=>{
    fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey=e6a861b23a474a97af3e647718c37557"). then((response)=>{
        return response.json();

    }).then(json=>{
        console.log(json)
    })
})

// ()=>"solução direta sem return";
// ()+>{
//     bla bla
//     return"alguma coisa"
// }

// parametro =>{

// }

// (a,b)=>asadasd