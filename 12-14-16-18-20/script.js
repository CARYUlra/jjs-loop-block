let banana = "";
let inicio = prompt("fala o inicio");
let fim = prompt("fale o fim");

if (isNaN(inicio) || isNaN(fim)) {
    alert("digite numeralios");
} else {
    if (inicio > fim){
        pedro = inicio
        inicio = [fim]
        fim = [pedro]
    }  
    for (let contador = inicio; contador <= fim; contador++) {
        if (contador % 2 === 0) {
            banana += contador + " ";
        }
    }
    alert(banana);

}