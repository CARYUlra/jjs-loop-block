let banana = "";
let inicio = prompt("fala o inicio");
let fim = prompt("fale o fim");

if (isNaN(inicio) || isNaN(fim)) {
    alert("digite numeralios");
} else {
    for (let contador = inicio; contador <= fim; contador++) {
        if (contador % 2 === 0) {
            banana += contador + " ";
        }
    }
    alert(banana);
}