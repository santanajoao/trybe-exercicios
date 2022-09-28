// crie uma funcao que receba duas strings e checa 
// se a segunda string é o final da primeira
function verificaFimPalavra(palavra, fim) {
  let indicePalavra = palavra.length - 1;
  let indiceFim = fim.length - 1;
  while (indiceFim >= 0) {
    if (palavra[indicePalavra] != fim[indiceFim]) {
      return false;
    }
    indicePalavra -= 1
    indiceFim -= 1
  }
  return true;
}
