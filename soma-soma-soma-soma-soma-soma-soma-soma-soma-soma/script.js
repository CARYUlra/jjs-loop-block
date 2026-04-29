let soma = 0;
let numeros = [];

alert("digite 10 numeros inteiros");

for (let banana = 1; banana <= 10; banana++) {
    let entrada = prompt(`digite o ${banana} o número`);

    let numero = parseInt(entrada);


    if (isNaN(numero) || entrada === null) {
        alert("DIGITA UM NUMERO, NUMEROS");
        banana--;
    } else {
        numeros.push(numero);
        soma += numero;
    }
}

alert(`números digitados ${numeros.join(", ")}\n
a soma total é ${soma}`);