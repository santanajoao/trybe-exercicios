const searchEmployee = require('./search-employee');

// Dados
describe('Função searchEmployee', () => {
  it('a searchEmployee deve estar declarada', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('searchEmployee deve ser uma função', () =>{
    expect(typeof searchEmployee).toBe('function');
  });

  it('checa se retorna o experado ao não inserir parâmetros', () => {
    expect(searchEmployee()).toBe('Nenhum parâmetro recebido')
  });

  it('checa se retorna o experado ao acessar ID inválido', () => {
    expect(searchEmployee('4002-8', 'firstName')).toBe('ID não identificada');
  });

  it('checa se retorna o experado ao acessar informações inválidas', () => {
    const invalidInfoError = 'Informação indisponível';
    expect(searchEmployee('8579-6', 'havePets')).toBe(invalidInfoError);
    expect(searchEmployee('9852-2-2', 'likesGames')).toBe(invalidInfoError);
  });

  it('checa se retorna o experado com informações válidas', () => {
    expect(searchEmployee('4678-2', 'id')).toBe('4678-2');
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs');
    expect(searchEmployee('9852-2-2', 'specialities')).toEqual(['Ruby', 'SQL']);
  });
});
