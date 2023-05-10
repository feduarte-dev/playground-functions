// Desafio 1 - Crie a função compareTrue

const compareTrue = (parametro1, parametro2) => {
  if (parametro1 && parametro2 === true) {
    return true;
  }
  return false;
};

// Desafio 2 - Crie a função splitSentence

const splitSentence = (string) => string.split(' ');

// Desafio 3 - Crie a função concatName

const concatName = (array) => {
  const primeiroEultimo = [];
  for (let index = 0; index <= array.length; index += 1) {
    if (index === 0 || index === array.length - 1) {
      primeiroEultimo.unshift(array[index]);
    }
  }
  return primeiroEultimo.join(', ');
};

// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) => wins * 3 + ties;

// Desafio 5 - Crie a função highestCount

const highestCount = (array) => {
  let maiorNumero = array[0];
  let contador = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  }
  for (let index1 = 0; index1 < array.length; index1 += 1) {
    if (array[index1] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, height) => {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
};

const calcRectangleArea = (base, height) => {
  let areaRetangulo = base * height;
  return areaRetangulo;
};

const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(
      base,
      height
    )}`;
  } else if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(
      base,
      height
    )}`;
  } else {
    return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
};

// Desafio 7 - Crie a função catAndMouse

const catAndMouse = (mouse, cat1, cat2) => {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
};

// Desafio 8 - Crie a função fizzBuzz

const fizzBuzz = (array) => {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      array[index] = 'fizzBuzz';
    } else if (array[index] % 3 === 0) {
      array[index] = 'fizz';
    } else if (array[index] % 5 === 0) {
      array[index] = 'buzz';
    } else {
      array[index] = 'bug!';
    }
  }
  return array;
};

// Desafio 9 - Crie a função encode e a função decode

const encode = (string) => {
  let array = string.split('');
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === 'a') {
      array[index] = 1;
    } else if (array[index] === 'e') {
      array[index] = 2;
    } else if (array[index] === 'i') {
      array[index] = 3;
    } else if (array[index] === 'o') {
      array[index] = 4;
    } else if (array[index] === 'u') {
      array[index] = 5;
    }
  }
  return array.join('');
};

const decode = (string) => {
  let array = string.split('');
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === '1') {
      array[index] = 'a';
    } else if (array[index] === '2') {
      array[index] = 'e';
    } else if (array[index] === '3') {
      array[index] = 'i';
    } else if (array[index] === '4') {
      array[index] = 'o';
    } else if (array[index] === '5') {
      array[index] = 'u';
    }
  }
  return array.join('');
};

// Desafio 10 - Crie a função techList

const techList = (techs, pessoa) => {
  const arrayObj = [];
  let techsSort = techs.sort();
  for (let index = 0; index < techs.length; index += 1) {
    arrayObj.push({ tech: techsSort[index], name: pessoa });
  }
  return arrayObj;
};

// Não modifique essas linhas
module.exports = {
  calcTriangleArea:
    typeof calcTriangleArea === 'function' ? calcTriangleArea : () => {},
  calcRectangleArea:
    typeof calcRectangleArea === 'function' ? calcRectangleArea : () => {},
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : () => {},
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : () => {},
  compareTrue: typeof compareTrue === 'function' ? compareTrue : () => {},
  concatName: typeof concatName === 'function' ? concatName : () => {},
  decode: typeof decode === 'function' ? decode : () => {},
  encode: typeof encode === 'function' ? encode : () => {},
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : () => {},
  footballPoints:
    typeof footballPoints === 'function' ? footballPoints : () => {},
  highestCount: typeof highestCount === 'function' ? highestCount : () => {},
  splitSentence: typeof splitSentence === 'function' ? splitSentence : () => {},
  techList: typeof techList === 'function' ? techList : () => {},
};
