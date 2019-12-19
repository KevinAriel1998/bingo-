var contenedores= document.getElementById("contenedor");

var numTablero = [];
var nJugador=[]
var valor = 1;
dibujar();
document.getElementById("boton")
    .addEventListener("click", function() {
jugar();
dibujar()
    });

function dibujar(){
    numTablero = [];
    for (var i = 1; i < 91; i++) {
        numTablero.push(i);
        var celda= document.createElement('div');
   
        celda.className = 'celdas';
        celda.id =i;
        for (var k = 0; k < nJugador.length; k++) {
           
          
            if (nJugador[k] === celda.id) {
                console.log("encontrado " + celda.id+ "  y " + nJugador[k]);
            
            }else{;
            celda.style.backgroundColor = "#E5EAB2 ";
            }

        }
        celda.appendChild(document.createTextNode(i));
        contenedores.appendChild(celda);
    }
}

function jugar(){
    contenedores.innerHTML = "";
    var num=generarNumero(0, 90);
    if ((nJugador.includes(num)|| nJugador === [])&& nJugador.length < 90 ) {
        jugar();
    } else if(nJugador.length<90){
        nJugador.push(num);
        console.log(nJugador[nJugador.length - 1]);
    }else{
        alert("Todos los numeros se han jugado");
    }
}
function generarNumero(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
window.alert("QUIERES JUGAR BINGO");
prompt("Pon tu nombre");
