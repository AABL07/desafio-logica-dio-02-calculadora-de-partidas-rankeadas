/* Calculadora de partidas Rankeadas*/


/* Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)*/

function calcularSaldoVitorias(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    return saldoVitorias;
}

function classificarNivel(vitorias) {
    let nivel;
    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias >= 50) {
        nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = 'Lendário';
    } else if ( vitorias >= 101) {
        nivel = 'Imortal';
    } else {
        nivel = 'Indefinido';
    }
    return nivel;
}

/*Exemplo de uso*/
let vitorias = 56;
let derrotas = 45;
let saldo = calcularSaldoVitorias(vitorias, derrotas);
let nivel = classificarNivel(vitorias);

/*Saída*/
console.log(`O Herói tem o saldo de vitórias de **${saldo} vitórias** e está no nível **${nivel}**`);