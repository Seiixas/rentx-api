describe('Create a new category', () => {
  it('Two plus two must to be four ', () => {
    const soma = 2 + 2;
    const resultado = 4;

    expect(soma).toBe(resultado);
  });

  it('Two plus two must not to be five ', () => {
    const soma = 2 + 2;
    const resultado = 5;

    expect(soma).not.toBe(resultado);
  });
});
