alert("pense em um numero")
let numero = prompt("digite o numero q voce pensou");

numero = parseInt(numero);

if (!isNaN(numero)) {
    let tabuada = "";

    for (let banana = 1; banana <= 10; banana++) {
        tabuada += `${numero} x ${banana} = ${numero * banana}\n`;
    }

    alert(`tabuada do ${numero}:\n\n${tabuada}`);
} else {
    alert("NUMERO ohhh numero, digita um numero");
}