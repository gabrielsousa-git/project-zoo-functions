const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Se não passados parâmetros, deve retornar todos os dias da semana com os horários de abertura e fechamento', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });
  it('Testa se o argumeto passado é um número válido', () => {
    expect(() => { getOpeningHours('Monday', 'am:44-AM'); }).toThrowError(new Error('The hour should represent a number'));
  });
  it('Testa se o argumento passado possui a abreviação correta', () => {
    expect(() => { getOpeningHours('Monday', '14:00-ui'); }).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Testa se a hora passada está dentro do intervalo esperado', () => {
    expect(() => { getOpeningHours('Monday', '14:00-PM'); }).toThrowError(new Error('The hour must be between 0 and 12'));
  });
  it('Testa se os minutos passados estão dentro do intervalo esperado', () => {
    expect(() => { getOpeningHours('Monday', '11:77-PM'); }).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
  it('Retorna a mensagem correta de acordo com os parâmetros passados', () => {
    expect(getOpeningHours('Monday', '12:00-AM')).toEqual('The zoo is closed');
    expect(getOpeningHours('Sunday', '12:00-AM')).toEqual('The zoo is open');
  });
  it('Testa se foi passado um dia da semana', () => {
    expect(() => { getOpeningHours('Day', '11:00-PM'); }).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
});
