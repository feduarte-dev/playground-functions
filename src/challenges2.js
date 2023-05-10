// Desafio 11 - Crie a função generatePhoneNumber
const verificaArray = (telefone) => {
  for (let index = 0; index < telefone.length; index += 1) {
    if (telefone[index] < 0 || telefone[index] > 9) {
      return false;
    }
  }
};
const verificaRepetido = (telefone) => {
  for (let index = 0; index < telefone.length; index += 1) {
    repetido = 0;
    for (let index2 = 0; index2 < telefone.length; index2 += 1) {
      if (telefone[index2] === telefone[index]) {
        repetido += 1;
      }
    }
    if (repetido >= 3) {
      return false;
    }
  }
};

const generatePhoneNumber = (telefone) => {
  if (telefone.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (
    verificaArray(telefone) === false ||
    verificaRepetido(telefone) === false
  ) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else {
    return `(${telefone[0]}${telefone[1]}) ${telefone[2]}${telefone[3]}${telefone[4]}${telefone[5]}${telefone[6]}-${telefone[7]}${telefone[8]}${telefone[9]}${telefone[10]}`;
  }
};

// Desafio 12 -  Crie a função triangleCheck

const primeiroTeste = (lineA, lineB, lineC) => {
  if (lineA > lineB + lineC || lineB > lineC + lineA || lineC > lineA + lineB) {
    return false;
  }
};
const segundoTeste = (lineA, lineB, lineC) => {
  if (
    lineA < Math.abs(lineB - lineC) ||
    lineB < Math.abs(lineA - lineC) ||
    lineC < Math.abs(lineA - lineB)
  ) {
    return false;
  }
};

const terceiroTeste = (lineA, lineB, lineC) => {
  if (lineA < lineB + lineC || lineB < lineA + lineC || lineC < lineA + lineB) {
    return true;
  }
};

const quartoTeste = (lineA, lineB, lineC) => {
  if (
    (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) ||
    lineB > Math.abs(lineA - lineC) ||
    lineC > Math.abs(lineA - lineB)
  ) {
    return true;
  }
};

const triangleCheck = (lineA, lineB, lineC) => {
  if (
    primeiroTeste(lineA, lineB, lineC) === false ||
    segundoTeste(lineA, lineB, lineC) === false
  ) {
    return false;
  } else if (
    terceiroTeste(lineA, lineB, lineC) ||
    quartoTeste(lineA, lineB, lineC)
  ) {
    return true;
  }
};
// Desafio 13 - Crie a função hydrate

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber:
    typeof generatePhoneNumber === 'function' ? generatePhoneNumber : () => {},
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : () => {},
  hydrate: typeof hydrate === 'function' ? hydrate : () => {},
};
