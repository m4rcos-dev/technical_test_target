const inverterString = (s) => {
  let stringInvertida = "";

  for (let i = s.length - 1; i >= 0; i--) {
    stringInvertida += s[i];
  }

  return stringInvertida;
};

// Entrada da string
const entrada = "Hello, World!"; // Substitua por qualquer string que deseja testar

// Chama a função para inverter a string
const resultado = inverterString(entrada);

// Exibe o resultado
console.log("String invertida:", resultado);
