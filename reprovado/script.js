let soma = 0;
let numeros = [];
let nuetas = 0; 

alert("fale suas notas filhão");

for (let banana = 1; banana <= 5; banana++) {
    let entrada = prompt(`digite sua ${banana}° nota`);
    let numero = parseInt(entrada);

    if (isNaN(numero) || entrada === null) {
        alert("DIGITA UM NUMERO, NUMEROS");
        banana--;
    } else {
        numeros.push(numero);
        soma += numero;
    }
}

nuetas = soma / 5;

alert(`suas notas ${numeros.join(", ")}\n
sua media é ${nuetas}`);

if (nuetas <= 6) {
    alert(`vagabundo serve nem pra passar de ano `);
} else {

    alert(`não fez mais que sua obrigração`);
}
