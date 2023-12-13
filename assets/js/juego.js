let canvas = document.getElementById("canvas");
let contexto = canvas.getContext('2d');

let limitePlataforma = 560



let cuadraditoRosa = { x: 320, y: 80, width: 67, height: 67, color: '#F14DDA' };
let cuadraditoVioleta = { x: 320 + 490, y: 80 + 490, width: 67, height: 67, color: '#C786FD' };

let cuadritos = crearGrilla(8, 8);



let imgRBlanca = new Image();
imgRBlanca.src = '../img/rataBlanca.png';

let imgRBlancaBombita = new Image();
imgRBlancaBombita.src = '../img/rataBlancaBombita.png';



let imgRVioleta = new Image();
imgRVioleta.src = '../img/rataVioleta.png';

let imgRVioletaBombita = new Image();
imgRVioletaBombita.src = '../img/rataVioletaBombita.png';



let caraRBlanca = new Image();
caraRBlanca.src = '../img/caraRataBlanca.png';


let caraRVioleta = new Image();
caraRVioleta.src = '../img/caraRataVioleta.png';




let colorCuadritosPlataforma = '#ECD691';

function crearGrilla(rows, cols) {
    let grid = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {

            let colorCuadritosPlataforma = '#ECD691';

            if ((j * 70) + 320 === cuadraditoRosa.x && (i * 70) + 80 === cuadraditoRosa.y) {
                colorCuadritosPlataforma = cuadraditoRosa.color;
            }

            if ((j * 70) + 320 === cuadraditoVioleta.x && (i * 70) + 80 === cuadraditoVioleta.y) {
                colorCuadritosPlataforma = cuadraditoVioleta.color;
            }

            grid.push({
                x: j * 70 + 320,
                y: i * 70 + 80,
                width: 70,
                height: 70,
                color: colorCuadritosPlataforma,
            });
        }
    }
    return grid;
}







function drawSquare(square) {
    contexto.strokeStyle = "black";
    contexto.lineWidth = 5;
    contexto.strokeRect(square.x, square.y, 67, 67);

    contexto.fillStyle = square.color;
    contexto.fillRect(square.x, square.y, 67, 67);
}

function drawImage(x, y, image) {
    contexto.drawImage(image, x, y, 67, 67);
}







let primerQuesoRosa = false;
let primerQuesoVioleta = false;

let rosaTocoQueso = null;
let violetaTocoQueso = null;

let cantQuesosRosa = 0;
let cantQuesosVioleta = 0;


function draw() {
    contexto.clearRect(460, 120, limitePlataforma, limitePlataforma);


    for (let i = 0; i < cuadritos.length; i++) {
        drawSquare(cuadritos[i]);
    }

    for (let i = 0; i < celdasPintadasRosas.length; i++) {
        drawSquare(celdasPintadasRosas[i]);
    }

    for (let i = 0; i < celdasPintadasVioletas.length; i++) {
        drawSquare(celdasPintadasVioletas[i]);
    }

    for (let i = 0; i < elementos.length; i++) {
        drawImage(elementos[i].x, elementos[i].y, elementos[i].image);
    }




    
    if (rosaTocoQueso) {
        rosaTocoQueso.color = cuadraditoRosa.color;
        celdasPintadasRosas.push(rosaTocoQueso);

        primerQuesoRosa = true;
        rosaTocoQueso = null;
    }

    if(primerQuesoRosa === true && cantQuesosRosa === 0){
        cuadritos[0].color = colorCuadritosPlataforma;
        cantQuesosRosa ++;
    }




    if (violetaTocoQueso) {
        violetaTocoQueso.color = cuadraditoVioleta.color;
        celdasPintadasVioletas.push(violetaTocoQueso);

        primerQuesoVioleta = true;
        violetaTocoQueso = null;
    }

    if(primerQuesoVioleta === true && cantQuesosVioleta === 0){
        cuadritos[63].color = colorCuadritosPlataforma;
        cantQuesosVioleta ++;
    }





    if(ratonRosaTocoBombita === true){
        contexto.drawImage(imgRBlancaBombita, cuadraditoRosa.x, cuadraditoRosa.y, cuadraditoRosa.width, cuadraditoRosa.height);
    }
    else{
        if(teclaAtaqueVioletaPrecionada){

            contexto.fillStyle = "red";
            contexto.fillRect(cuadraditoRosa.x, cuadraditoRosa.y, cuadraditoRosa.width, cuadraditoRosa.height);
            contexto.drawImage(imgRBlanca, cuadraditoRosa.x, cuadraditoRosa.y, cuadraditoRosa.width, cuadraditoRosa.height);

            setTimeout(function(){
                teclaAtaqueVioletaPrecionada = false;
            }, 5000);

            
        }else{
            contexto.drawImage(imgRBlanca, cuadraditoRosa.x, cuadraditoRosa.y, cuadraditoRosa.width, cuadraditoRosa.height);
        }
    }


    if(ratonVioletaTocoBombita === true){
        contexto.drawImage(imgRVioletaBombita, cuadraditoVioleta.x, cuadraditoVioleta.y, cuadraditoVioleta.width, cuadraditoVioleta.height);
    }
    else{
        if(teclaAtaqueRosaPrecionada){

            contexto.fillStyle = "red";
            contexto.fillRect(cuadraditoVioleta.x, cuadraditoVioleta.y, cuadraditoVioleta.width, cuadraditoVioleta.height);
            contexto.drawImage(imgRVioleta, cuadraditoVioleta.x, cuadraditoVioleta.y, cuadraditoVioleta.width, cuadraditoVioleta.height);

            setTimeout(function(){
                teclaAtaqueRosaPrecionada = false;
            }, 5000);

            
        }else{
            contexto.drawImage(imgRVioleta, cuadraditoVioleta.x, cuadraditoVioleta.y, cuadraditoVioleta.width, cuadraditoVioleta.height);
        }
    }







    contexto.fillStyle = 'white';
    contexto.fillRect(35, 248, 150, 70);
    contexto.fillStyle = 'black';
    contexto.font = '50px Arial';
    contexto.fillText(puntajeFinalRosa, 80, 300);


    contexto.fillStyle = 'white';
    contexto.fillRect(1015, 248, 150, 70);
    contexto.fillStyle = 'black';
    contexto.font = '50px Arial';
    contexto.fillText(puntajeFinalVioleta, 1060, 300);
    


    contexto.drawImage(caraRBlanca, 0, 30, 220, 220);
    contexto.drawImage(caraRVioleta, 980, 30, 220, 220);

    
    
}









let teclaAtaqueRosaPrecionada = false;
window.addEventListener('keydown', controlRataRosa);

function controlRataRosa(event){
    
    let nuevaPosicionRosa = { x: cuadraditoRosa.x, y: cuadraditoRosa.y, width: cuadraditoRosa.width, height: cuadraditoRosa.height };
    
    if(!teclaAtaqueVioletaPrecionada){
        switch (event.key) {
            case 'w': case 'W':
                nuevaPosicionRosa.y = Math.max(80, cuadraditoRosa.y - 70);
                break;
    
            case 's': case 'S':
                nuevaPosicionRosa.y = Math.min(80 + limitePlataforma - cuadraditoRosa.height, cuadraditoRosa.y + 70);
                break;
    
            case 'a': case 'A':
                nuevaPosicionRosa.x = Math.max(320, cuadraditoRosa.x - 70);
                break;
    
            case 'd': case 'D':
                nuevaPosicionRosa.x = Math.min(320 + limitePlataforma - cuadraditoRosa.width, cuadraditoRosa.x + 70);
                break;
        }
    }

    

    if(ratonRosaTocoBombita && (event.key === 'g' || event.key === 'G')){
        teclaAtaqueRosaPrecionada = true;
        ratonRosaTocoBombita = false;
        tiempoBombita = 1;
        if(tiempoBombita === 1){
            crearBombitas();
        }
    }



    if (!colisionEntreRatas(nuevaPosicionRosa, cuadraditoVioleta)) {
        cuadraditoRosa.x = nuevaPosicionRosa.x;
        cuadraditoRosa.y = nuevaPosicionRosa.y;
    }

    updateGrid();
    draw();
}




let teclaAtaqueVioletaPrecionada = false;
window.addEventListener('keydown', controlRataVioleta);

function controlRataVioleta(event){
    
    let nuevaPosicionVioleta = { x: cuadraditoVioleta.x, y: cuadraditoVioleta.y, width: cuadraditoVioleta.width, height: cuadraditoVioleta.height };


    if(!teclaAtaqueRosaPrecionada){
        switch (event.key) {
            case 'ArrowUp':
                nuevaPosicionVioleta.y = Math.max(80, cuadraditoVioleta.y - 70);
                break;
    
            case 'ArrowDown':
                nuevaPosicionVioleta.y = Math.min(80 + limitePlataforma - cuadraditoVioleta.height, cuadraditoVioleta.y + 70);
                break;
    
            case 'ArrowLeft':
                nuevaPosicionVioleta.x = Math.max(320, cuadraditoVioleta.x - 70);
                break;
    
            case 'ArrowRight':
                nuevaPosicionVioleta.x = Math.min(320 + limitePlataforma - cuadraditoVioleta.width, cuadraditoVioleta.x + 70);
                break;
        }
    }



    if(ratonVioletaTocoBombita && (event.key === 'l' || event.key === 'L')){
        teclaAtaqueVioletaPrecionada = true;
        ratonVioletaTocoBombita = false;
        tiempoBombita = 1;
        if(tiempoBombita === 1){
            crearBombitas();
        }
    }



    if (!colisionEntreRatas(nuevaPosicionVioleta, cuadraditoRosa)) {
        cuadraditoVioleta.x = nuevaPosicionVioleta.x;
        cuadraditoVioleta.y = nuevaPosicionVioleta.y;
    }

    updateGrid();
    draw();
}


function colisionEntreRatas(nuevaPosicion, otraRata) {
    return (
        nuevaPosicion.x < otraRata.x + otraRata.width &&
        nuevaPosicion.x + nuevaPosicion.width > otraRata.x &&
        nuevaPosicion.y < otraRata.y + otraRata.height &&
        nuevaPosicion.y + nuevaPosicion.height > otraRata.y
    );
}











let puntajeFinalRosa = 0
let puntajeFinalVioleta = 0

let puntosRosa = 0
let puntosVioleta = 0

let celdasPintadasRosas = [cuadritos[0]];
let celdasPintadasVioletas = [cuadritos[63]];

let ratonRosaTocoBombita = false;
let ratonVioletaTocoBombita = false;



function updateGrid() {
    
    for (let i = 0; i < cuadritos.length; i++) {
               
        if (cuadraditoRosa.x < cuadritos[i].x + cuadritos[i].width &&
            cuadraditoRosa.x + cuadraditoRosa.width > cuadritos[i].x &&
            cuadraditoRosa.y < cuadritos[i].y + cuadritos[i].height &&
            cuadraditoRosa.y + cuadraditoRosa.height > cuadritos[i].y
            
            ){
                if(cuadritos[i].color != cuadraditoRosa.color){
                    cuadritos[i].color = cuadraditoRosa.color;
                    celdasPintadasRosas.push(cuadritos[i]);
                }
            }else


        if (cuadraditoVioleta.x < cuadritos[i].x + cuadritos[i].width &&
            cuadraditoVioleta.x + cuadraditoVioleta.width > cuadritos[i].x &&
            cuadraditoVioleta.y < cuadritos[i].y + cuadritos[i].height &&
            cuadraditoVioleta.y + cuadraditoVioleta.height > cuadritos[i].y
            
            ){
                if(cuadritos[i].color != cuadraditoVioleta.color){
                    cuadritos[i].color = cuadraditoVioleta.color;
                    celdasPintadasVioletas.push(cuadritos[i]);
                }                
            }          
    }





    for (let i = 0; i < elementos.length; i++) {
        
        
        if (
            cuadraditoRosa.x < elementos[i].x + 70 &&
            cuadraditoRosa.x + cuadraditoRosa.width > elementos[i].x &&
            cuadraditoRosa.y < elementos[i].y + 70 &&
            cuadraditoRosa.y + cuadraditoRosa.height > elementos[i].y
        ) {

            if(elementos[i].image === quesito){
                rosaTocoQueso = cuadritos.find(cuadrito =>
                    cuadrito.x === elementos[i].x && cuadrito.y === elementos[i].y
                );
    
                elementos.splice(i, 1);
                i--;
    
                
    
                for (let k = 0; k < celdasPintadasRosas.length; k++) {
                    if(celdasPintadasRosas[k].color !== cuadraditoRosa.color){
                        celdasPintadasRosas.splice(k, 1)
                        k--;
                    }
                }
    
                
    
                celdasPintadasRosas.forEach(cuadri =>
                    cuadri.color = colorCuadritosPlataforma,
                );
    
                puntosRosa = celdasPintadasRosas.length - 1;
                puntajeFinalRosa += puntosRosa
                
                celdasPintadasRosas = []



            }else if(elementos[i].image === bombita){
                elementos.splice(i, 1);
                i--;
                ratonRosaTocoBombita = true;
            }

            






        }else if (
            cuadraditoVioleta.x < elementos[i].x + 70 &&
            cuadraditoVioleta.x + cuadraditoVioleta.width > elementos[i].x &&
            cuadraditoVioleta.y < elementos[i].y + 70 &&
            cuadraditoVioleta.y + cuadraditoVioleta.height > elementos[i].y
        ) {
            if(elementos[i].image === quesito){
                violetaTocoQueso = cuadritos.find(cuadrito =>
                    cuadrito.x === elementos[i].x && cuadrito.y === elementos[i].y
                );
    
                elementos.splice(i, 1);
                i--;
                
                
    
                for (let k = 0; k < celdasPintadasVioletas.length; k++) {
                    if(celdasPintadasVioletas[k].color !== cuadraditoVioleta.color){
                        celdasPintadasVioletas.splice(k, 1)
                        k--;
                    }
                }
    
    
                celdasPintadasVioletas.forEach(cuadri =>
                    cuadri.color = colorCuadritosPlataforma
                );
    
                puntosVioleta = celdasPintadasVioletas.length - 1;
                puntajeFinalVioleta += puntosVioleta;
    
                celdasPintadasVioletas = []



            }else if(elementos[i].image === bombita){
                elementos.splice(i, 1);
                i--;
                ratonVioletaTocoBombita = true;
            }
        }
    }
    
}







let quesito = new Image();
quesito.src = '../img/quesito.png';

let bombita = new Image();
bombita.src = '../img/bombita.png';



let elementos = []
let generadorDeQuesos;

function crearQuesos(){
    
    generadorDeQuesos = setInterval(function(){

        let image = quesito;
    
        let randomIndex = Math.floor(Math.random() * cuadritos.length);
        let randomPosition = cuadritos[randomIndex];
    
        while(
            (randomPosition.x === cuadraditoRosa.x && randomPosition.y === cuadraditoRosa.y && randomPosition.color === cuadraditoRosa.color) ||
            (randomPosition.x === cuadraditoVioleta.x && randomPosition.y === cuadraditoVioleta.y && randomPosition.color === cuadraditoVioleta.color)
        ){
            randomIndex = Math.floor(Math.random() * cuadritos.length);
            randomPosition = cuadritos[randomIndex];
        }
    
    
        if(randomPosition.color === colorCuadritosPlataforma){
            let positionOccupied = elementos.some(elemento =>
                elemento.x === randomPosition.x && elemento.y === randomPosition.y
            );
    
            if(!positionOccupied){
                elementos.push({
                    x: randomPosition.x,
                    y: randomPosition.y,
                    image: image,
                });
            }
        }
    
    }, 1500);
}    


crearQuesos();







let generadorDeBombitas;
let tiempoBombita = 1;

function crearBombitas(){

    if(tiempoBombita === 1){
        generadorDeBombitas = setInterval(function(){
            if(!ratonRosaTocoBombita && !ratonVioletaTocoBombita){
                let image = bombita;
        
                let randomIndex = Math.floor(Math.random() * cuadritos.length);
                let randomPosition = cuadritos[randomIndex];
            
                while(
                    (randomPosition.x === cuadraditoRosa.x && randomPosition.y === cuadraditoRosa.y && randomPosition.color === cuadraditoRosa.color) ||
                    (randomPosition.x === cuadraditoVioleta.x && randomPosition.y === cuadraditoVioleta.y && randomPosition.color === cuadraditoVioleta.color)
                ){
                    randomIndex = Math.floor(Math.random() * cuadritos.length);
                    randomPosition = cuadritos[randomIndex];
                }
            
            
                if(randomPosition.color === colorCuadritosPlataforma){
                    let positionOccupied = elementos.some(elemento =>
                        elemento.x === randomPosition.x && elemento.y === randomPosition.y
                    );
            
                    if(!positionOccupied){
                        elementos.push({
                            x: randomPosition.x,
                            y: randomPosition.y,
                            image: image,
                        });
                    }
                }
    
                tiempoBombita--
                if(tiempoBombita === 0){
                    clearInterval(generadorDeBombitas);
                }
            }
        
        }, 4000);
    }        
}

crearBombitas();














let tiempoTotalSeg = 60;

function actualizarTemporizador() {
    contexto.fillStyle = '#108959';
    contexto.fillRect(490, 5, 250, 65);

    let min = Math.floor(tiempoTotalSeg / 60);
    let seg = tiempoTotalSeg % 60;

    let formatoMMSS
    if(seg < 10){
        formatoMMSS = '0'
    }
    else{
        formatoMMSS = ''
    }

    if(min == 0 && seg <= 10){
        contexto.font = '70px Playpen Sans';
        contexto.fillStyle = 'red';
    }
    else{
        contexto.font = '70px Playpen Sans';
        contexto.fillStyle = '#42BF88 ';
    }
    
    contexto.fillText(`${min}:${formatoMMSS}${seg}`, 520, 65);
}

actualizarTemporizador()


let temporizador;

function activarTemporizador(){

    temporizador = setInterval(function () {
        tiempoTotalSeg--;

        if(tiempoTotalSeg < 0){
            clearInterval(temporizador);

            if(puntajeFinalRosa > puntajeFinalVioleta){
                Swal.fire({
                    html: `
                        <div style="text-align: center; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; font-size: 50px;">GANADOR:</div>
                        <img src="../img/caraRataBlanca.png" style="margin-top: 5px;">
                    `,
                    showDenyButton: true,

                    confirmButtonColor: '#156AEC',
                    confirmButtonText: "!Volver a jugar¡",
                    denyButtonText: `Menú principal`,
                    allowOutsideClick: false

                }).then((result) => {
                    if (result.isConfirmed) {
                    window.location.href = "./juego.html";
                    } else if (result.isDenied) {
                        window.location.href = "/index.html";
                    }
                });
            }
            else if(puntajeFinalRosa < puntajeFinalVioleta){
                Swal.fire({
                    html: `
                        <div style="text-align: center; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; font-size: 50px;">GANADOR:</div>
                        <img src="../img/caraRataVioleta.png" style="margin-top: 5px;">
                    `,
                    showDenyButton: true,

                    confirmButtonColor: '#156AEC',
                    confirmButtonText: "!Volver a jugar¡",
                    denyButtonText: `Menú principal`,
                    allowOutsideClick: false

                }).then((result) => {
                    if (result.isConfirmed) {
                    window.location.href = "./juego.html";
                    } else if (result.isDenied) {
                        window.location.href = "/index.html";
                    }
                });
            }
            else{
                Swal.fire({
                    title: "¡EMPATE!",
                    titleFontSize: '2.5em',
                    showDenyButton: true,

                    confirmButtonColor: '#156AEC',
                    confirmButtonText: "!Volver a jugar¡",
                    denyButtonText: `Menú principal`,
                    allowOutsideClick: false

                }).then((result) => {
                    if (result.isConfirmed) {
                    window.location.href = "./juego.html";
                    } else if (result.isDenied) {
                        window.location.href = "/index.html";
                    }
                });
            }
        

        }else{
            actualizarTemporizador();
        }

    }, 1000);
}

activarTemporizador();


setInterval(draw, 100);






//AJUSTES DEL JUEGO

function alertaAjustes(){
    clearInterval(temporizador);
    clearInterval(generadorDeQuesos);
    
    Swal.fire({
        title: "MUSIQUITA",
        titleFontSize: '2.5em',
        titleFontFamily: 'Arial Narrow Bold',
        html: `
            <div class="contVolumen">
                <input type="range" min="1" max="100" value="50" class="slider" id="volumen">
            </div>            
        `,

        showCancelButton: true,
        focusConfirm: false,
        confirmButtonColor: '#52D433',
        cancelButtonColor: '#EB1200',
        confirmButtonText: 'REANUDAR',
        cancelButtonText: 'SALIR',
        customClass: {
            confirmButton: 'btn-vertical',
            cancelButton: 'btn-vertical',
        },

        allowOutsideClick: false

      }).then((result) => {
        if (result.isConfirmed) {
            activarTemporizador();
            crearQuesos();

        } else if (result.dismiss === Swal.DismissReason.cancel) {
            window.location.href = "/index.html";
        }
    }); 
}











//MUSIQUITA:

const miAudio = document.getElementById('audio');

window.addEventListener('DOMContentLoaded', function () {
    miAudio.play();
});
