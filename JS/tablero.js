var Grid = [];
var numeros = [];
var numero = 1;
var tablas = document.getElementById("tabla2");
dibujar(0);
document.getElementById("bt1")
    .addEventListener("click", function() {

        jugar();
    });

function jugar() {
    var num = generarNumero(1, 90);
    if (numeros.includes(num) && numeros.length < 90) {
        console.log("ya existe el numero : " + num);
        jugar();
    } else if (numeros.length < 90) {
        numeros.push(num);
        dibujar(num);

        console.log(numeros[numeros.length - 1]);
    } else {
        console.log("Se han completado todos los numeros de la tabla");
        alert("Se han jugado todos los número");
    }
}

function dibujar(num) {
    tablas.innerHTML = "";
    numero = 1;
    Grid = [];

    for (let i = 0; i < 6; i++) {
        Grid.push(new Array);
        var tr = document.createElement("tr");
        for (let j = 0; j < 15; j++) {
            Grid[i].push(numero);
            var td = document.createElement("td");
            for (var k = 0; k < numeros.length; k++) {
                if (Grid[i][j] === numeros[k]) {
                    console.log("encontrado " + Grid[i][j] + "  y " + numeros[k]);
                    td.style.backgroundColor = "#EA0606";
                }

            }
            td.appendChild(document.createTextNode(numero));
            tr.appendChild(td);
            tablas.appendChild(tr);


            numero++;

        }
    }
    console.log(Grid);
    document.getElementById("ultimo").innerHTML = num;
}

function generarNumero(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}