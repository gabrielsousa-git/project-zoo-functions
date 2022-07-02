const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna a qauntidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Retorna os nomes dos elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Retorna a a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Se o parâmetro é undefined retorna undefined', () => {
    expect(handlerElephants(undefined)).toBe(undefined);
  });
  it('Testa se o parâmetro passado é uma string', () => {
    expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Se o parâmetro passado não for válido retorna null', () => {
    expect(handlerElephants('testeTeste')).toBe(null);
  });
});
