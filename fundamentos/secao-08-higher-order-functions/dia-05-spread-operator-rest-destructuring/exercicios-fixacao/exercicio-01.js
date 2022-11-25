// Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread.
// Faça uma lista com as suas frutas favoritas4

const specialFruit = ['melância', 'manga', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['uva', 'abacaxi', 'morango'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));
