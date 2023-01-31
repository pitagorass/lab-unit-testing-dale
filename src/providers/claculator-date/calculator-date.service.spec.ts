import { Test, TestingModule } from '@nestjs/testing';
import { Calculator } from './calculator-date.service';

describe('Calculator Test', () => {
  let calculator: Calculator;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Calculator],
    }).compile();

    calculator = module.get<Calculator>(Calculator);
  });
  // Mantra Para Realizar Pruebas
  // AAA
  // Arrange - preparar o alistar nuestro escenario de pruebas
  // Act - Ejecutar o poner a actuar a nuestro escenario
  // Assert - Respondemos nuestras hipotesis
  // AAA Tambien se conoce como:
  // Given - Dado algo
  // When - Cuando
  // Then - Entonces
  it('should be defined calculator date', () => {
    expect(calculator).toBeDefined();
  });
  describe('Test For Calculator Date Class', () => {
  /*
  Arrange - En este punto preparamos o alistamos nuestra prueba es decir,
  que es lo que necesito yo para escribir mis pruebas, en este ejemplo es una instancia.
  En este caso nuestro beforeEach crea una instancia nueva para cada caso e prueba
  */
  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should add days to a given date', async () => {
    /* Arrange Configuramos preparando para este
    caso de pruebas una fecha especifica
    */
    const date = new Date(2020, 1, 1);
    const expectedDate = new Date(2020, 1, 11);
    /* Act - En este punto es cuando ejecutamos el metodo que queremos probar
    en este caso llamamos a nuestro metodo para sumar las fechas */
    const result = await calculator.addDays(date, 10);
    /* Assert - Hacer probar es donde resuelvo mis hipotesis o es donde diremos que
    nuestro resultado esperado sera igual a la fecha mas la sumatoria de los 10 dias */
    expect(result).toEqual(expectedDate);
  });

  it('should subtract days from a given date', () => {
    const date = new Date(2020, 1, 11);
    const expectedDate = new Date(2020, 1, 1);

    const result = calculator.subtractDays(date, 10);

    expect(result).toEqual(expectedDate);
  });

  it('should calculate the difference in days between two dates', () => {
    const date1 = new Date(2020, 1, 1);
    const date2 = new Date(2020, 1, 11);

    const result = calculator.diffInDays(date1, date2);

    expect(result).toBe(10);
  });
});

});
