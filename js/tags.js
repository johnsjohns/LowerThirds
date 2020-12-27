
var teste = true;
var icon = ["./svg/twitch-tile.svg","./svg/instagram.svg", "./svg/twitter.svg", "./svg/github-svgrepo-com.svg"]
var texto = ["johnsjohnshell", "@joaogilbertofigueira", "@jgfigueira", "https://github.com/johnsjohns"]
var posicaoGeral = 0;

function tempo(){
    interval = 120000;
    
    setInterval(() => {
       alternar()
    }, interval);
}

function alternar(){
    let item = document.getElementById("main").classList;
        item.remove("direita");
        item.add("esquerda");
        if(posicaoGeral < 3){
            posicaoGeral++;
        } else{
            posicaoGeral = 0;
        }
        setTimeout(() => {
            mudar(posicaoGeral);
            item.remove("esquerda");
            item.add("direita");
            
        }, 3000);
        
        
}


function mudar(posicao){
    let icone = icon[posicao];
    let texto_tag = texto[posicao];
    document.getElementById('img').src = icone;
    document.getElementById("texto").innerHTML = texto_tag;  
}
tempo();