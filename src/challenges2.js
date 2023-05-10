// Desafio 11 - Crie a função generatePhoneNumber

const generatePhoneNumber = (numeros) => {
  for (let index = 0; index < numeros.length; index += 1) {
    repetido = 0;
    for (let index2 = 0; index2 < numeros.length; index2 += 1) {
      if (numeros[index2] === numeros[index]) {
        repetido += 1;
      }
    }
  }
  for (let index3 = 0; index3 < numeros.length; index3 += 1) {
    if (numeros[index3] < 0 || numeros[index3] > 9 || repetido >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else if (numeros.length !== 11) {
      return 'Array com tamanho incorreto.';
    } else {
      return `(${numeros[0]}${numeros[1]}) ${numeros[2]}${numeros[3]}${numeros[4]}${numeros[5]}${numeros[6]}-${numeros[7]}${numeros[8]}${numeros[9]}${numeros[10]}`;
    }
  }
};
console.log(generatePhoneNumber([0, 1, 6]));
// Desafio 12 -  Crie a função triangleCheck
//
// Desafio 13 - Crie a função hydrate

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber:
    typeof generatePhoneNumber === 'function' ? generatePhoneNumber : () => {},
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : () => {},
  hydrate: typeof hydrate === 'function' ? hydrate : () => {},
};
