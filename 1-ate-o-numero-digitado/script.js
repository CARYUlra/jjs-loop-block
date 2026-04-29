let banana = ""; 
let zawarudo = prompt("fale um numero ai \n para que eu possar contar")
if (isNaN(zawarudo)) {
    alert("quero numeros não é tao dificil");
} else
for(let contador = 1; contador <= zawarudo; contador++) {
    banana = `${banana} ${contador}`; 
}
alert(banana);