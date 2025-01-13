// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

const isFibonacci  = (number ) => {
  if (number  < 0) return `${number } não pertence à sequência de Fibonacci.`;

  let [a, b] = [0, 1];

  if (number  === a || number  === b) return `${number } pertence à sequência de Fibonacci.`;

  while (b < number ) {
      [a, b] = [b, a + b];
  }

  return b === number
      ? `${number } pertence à sequência de Fibonacci.`
      : `${number } não pertence à sequência de Fibonacci.`;
};

// Exemplo de uso
const number  = 34; // Substitua por qualquer número que deseja testar
console.log(isFibonacci(number ));
