var lista;
const url = 'http://localhost:5000/api/Filmes'

function CarregarLista()
{
    lista = '<table>'
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(url, options)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        data.forEach(element => {
            lista+= '<tr>'
            lista+= `<td>${element.titulo}</td>`
            lista+= `<td>${element.idGeneroNavigation.nome}</td>`
            lista+= '</tr>'
        });
        lista+= '</table>'

        document.getElementById('Lista').innerHTML= lista;
    })
    .catch()

    
}

// CarregarLista();