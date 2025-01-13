// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;


const fs = require('fs');

// Importa os dados JSON
const monthlyRevenue = JSON.parse(fs.readFileSync('./mocks/dados.json', 'utf-8'));

// Filtrar dias com receita
const revenueDays = monthlyRevenue.filter(day => day.valor > 0);

// Calcula a menor e a maior receita
const minRevenue = Math.min(...revenueDays.map(day => day.valor));
const maxRevenue = Math.max(...revenueDays.map(day => day.valor));

// Calcula a média mensal
const monthlyAverage = revenueDays.reduce((sum, day) => sum + day.valor, 0) / revenueDays.length;

// Conta dias com receita acima da média
const daysAboveAverage = revenueDays.filter(day => day.valor > monthlyAverage).length;

// Exibir resultados
console.log(`Menor valor de faturamento: ${minRevenue.toFixed(2)}`);
console.log(`Maior valor de faturamento: ${maxRevenue.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${daysAboveAverage}`);
