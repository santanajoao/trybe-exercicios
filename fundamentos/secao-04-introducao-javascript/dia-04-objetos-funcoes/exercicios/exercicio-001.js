let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Imprima no console uma mensagem de boas-vindas para a personagem acima
console.log('Bem vinda,', info.personagem);

// Insira e imprima uma nova propriedade com o nome de chave ‘recorrente’ e
// o valor ‘Sim’
info['recorrente'] = 'Sim';
console.table(info);

// Faça um for/in que mostre todas as chaves do objeto
for (key in info) {
  console.log(key);
}

// Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto
for (key in info) {
  console.log(info[key]);
}

// Defina um objeto com as mesmas chaves e imprima os valores de cada objeto juntos
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (key in info) {
  let value1 = info[key];
  let value2 = info2[key];
  if (key === 'recorrente' && value1 === 'Sim' && value2 === 'Sim') {
    console.log('Ambos recorrentes')
  } else {
    console.log(info[key], 'e', info2[key]);
  }
}