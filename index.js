var API_URL = 'https://api.github.com/users/';
var USERNAME = 'CamilaMaximo';


//desta forma é melhor, pois deixamos nosso codigo
//sincrono, so faz algo depois que terminar o anterior
//utiliza menos codigo
window.onload = async function(){
    const response = await fetch(`${ API_URL}${ USERNAME}`);
    const dados = await response.json();
    const div = document.getElementById('conteudo');
        div.innerHTML = JSON.stringify(dados); 
}


//Segunda  forma
//podemos fazer de uma forma mais encadeada
function requisicaoPromise(){
  fetch(`${ API_URL}${ USERNAME}`)
  .then(response => response.json())
  .then(dados => {
     var div = document.getElementById('conteudo');
        div.innerHTML = JSON.stringify(dados); //faz dados virar string em json
  }).catch(err => console.error(err));
}

//Primeira forma 
//controla o que vai receber praticamente uma função callback
function requisicaoXMLHTTPRequest(){
    var xhttp = new XMLHttpRequest(); //variavel para  fazer a requisição
    xhttp.onreadystatechange = function(){ //essa função executa toda a vez que houver uma mudança no servidor
        if (this.readyState == 4 && this.status == 200){ //status 200 é ok
            var div = document.getElementById('conteudo');
            div.innerHTML = xhttp.responseText;

    }
  }
  xhttp.open('GET', API_URL + USERNAME, true);
  xhttp.send();

}