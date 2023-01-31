describe('Set Tests Principal', () => {
  /* beforeAll(()=>{})
  Sentancia de codigo que corre antes de cualquier prueba.
  Se usa en casos de pruebas donde sea necesario un setup antes
  de correr todas las preubas.
  Ejemplo: En casos de integracion podemos decirle que realice el
  levantamiento mock de una base de datos, necesito que levante una base
  de datos, para luego poder obtener algo de esa base de datos.

  Estos hooks tienen un scope */

  beforeAll(() => {
    console.log('Grupo 1 beforeAll Corre antes que todos los casos de prueba');
    const hi = 'Hola mundo';
    expect(hi).toMatch(/Hola/);
  });
  // Corre despues de los casos de preuba
  afterAll(() => {
    console.log('Grupo 1 afterAll Corre despues de cada caso de prueba');
    const hi = 'Hola mundo';
    expect(hi).toMatch(/Hola/);
  });
  // Corre esto antes de cada caso de prueba
  beforeEach(() => {
    console.log('Grupo 1  beforeEach Corre antes de cada caso de prueba');
    const hi = 'Hola mundo';
    expect(hi).toMatch(/Hola/);
  });
  // Corre esto despues de cada caso de prueba
  afterEach(() => {
    console.log('Grupo 1 afterEach Corre esto despues de cada caso de prueba');
    const hi = 'Hola mundo';
    expect(hi).toMatch(/Hola/);
  });
  test('Case Uno', () => {
    console.log('%TEST% ---> Caso uno sumas');
    expect(1 + 1).toBe(2);
  });
  test('Case Dos', () => {
    console.log('%TEST% ---> Caso dos multiplicacion');
    expect(1 * 6).toBe(6);
  });

  describe('Set Tests Other Group', () => {
    beforeAll(() => {
      console.log(
        'Grupo 2 beforeAll Corre antes que todos los casos de prueba',
      );
      const hi = 'Hola mundo';
      expect(hi).toMatch(/Hola/);
    });
    // Corre despues de los casos de preuba
    afterAll(() => {
      console.log('Grupo 2 afterAll Corre despues de cada caso de prueba');
      const hi = 'Hola mundo';
      expect(hi).toMatch(/Hola/);
    });
    // Corre esto antes de cada caso de prueba
    beforeEach(() => {
      console.log('Grupo 2 beforeEach Corre antes de cada caso de prueba');
      const hi = 'Hola mundo';
      expect(hi).toMatch(/Hola/);
    });
    // Corre esto despues de cada caso de prueba
    afterEach(() => {
      console.log(
        'Grupo 2 afterEach Corre esto despues de cada caso de prueba',
      );
      const hi = 'Hola mundo';
      expect(hi).toMatch(/Hola/);
    });
    test('Case tres', () => {
      console.log('%TEST% ---> Caso tres division');
      expect(1 / 1).toBe(1);
    });
  });
});
