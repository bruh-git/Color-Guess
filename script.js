const ball = document.querySelectorAll('.ball');
const colorRgb = document.getElementById ('rgb-color');
const resetGame = document.getElementById('reset-game');
const answer = document.getElementById('answer');
const scoreElement = document.getElementById('score');
const scoreInicial = 0;


// https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
function criaCor(){
    const r = parseInt(Math.random()*255);
    const g = parseInt(Math.random()*255);
    const b = parseInt(Math.random()*255);

    return `rgb(${r}, ${g}, ${b})`;
}
function posicaoAleatoria(){
    let resposta = Math.floor(math.random()*6);
    return resposta;
}

function textoCor(){
    colorRgb.innerText= criaCor;
}

function corBallsAleatoria(){
    for (let i = 0; i < ball.length; i+=1) {
        ball[i].style.backgroundColor = criaCor();
    }
    let acertou = posicaoAleatoria ();
    colorRgb.innerText = ball[acertou].style.backgroundColor
}
function selecionarBall(event){
    if (event.target.style.backgroundColor === colorRgb.innerText){
        answer.innerText="Acertou!"
    } else{
        answer.innerText = "Não foi dessa vez, tente novamente!"
    }
}
// .addEventListener('click', criaCor);
