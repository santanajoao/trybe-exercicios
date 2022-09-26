function numerosRomanos(numeroRomano) {
  const valores = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  let resultado = 0;

  for (let index = 0; index < numeroRomano.length; index += 1) {
    const algarismoAtual = valores[numeroRomano[index]];
    const proximoAlgarismo = valores[numeroRomano[index+1]];
    if (!proximoAlgarismo || algarismoAtual >= proximoAlgarismo) {
      resultado += algarismoAtual;
    } else {
      resultado -= algarismoAtual;
    }
  }
  return resultado;
}
