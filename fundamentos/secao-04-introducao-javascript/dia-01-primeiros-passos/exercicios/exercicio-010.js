/* Utilize switch/case para fazer um programa que receba o nome de
uma peça de xadrez e retorne os movimentos que ela faz. */
const chessPiece = 'RaInHa';

switch (chessPiece.toLowerCase()) {
  case 'rei':
  case 'rainha':
    console.log('vertical, horizontal e diagonal.');
    break;
  case 'torre':
    console.log('vertical e horizontal.');
    break;
  case 'bispo':
    console.log('diagonal.')
    break;
  case 'cavalo':
    console.log('movimento em L: horizontal e vertical.')
    break;
  case 'peao':
  case 'peão':
    console.log('vertical.')
    break;
  default:
    console.log('erro: peça inválida')
}
