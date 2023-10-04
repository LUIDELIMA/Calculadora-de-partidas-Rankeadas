function calcularNivel(vitorias, derrotas){
    const saldoDeVitorias = vitorias - derrotas;
    let nivel;

//estrutura de decisão
if (vitorias <= 10) {
    nivel= "Ferro";
} else if (vitorias >= 10  <= 20) {
    nivel ="Bronze";
} else if (vitorias >= 21  <= 50) {
    nivel = "Prata";  
} else if (vitorias >= 51  <= 80) {
    nivel = "Ouro";
} else if (vitorias >= 81  <= 90) {
    nivel = "Diamante"; 
} else if (vitorias >= 91  <= 100) {
    nivel = "Lendário";
} else if (vitorias >= 101) {
    nivel = "Imortal";  
}
return `O Herói tem saldo de ${saldoDeVitorias} e está no nível de ${nivel}.`;
}

const resultado = calcularNivel(100, 50);
console.log(resultado);




