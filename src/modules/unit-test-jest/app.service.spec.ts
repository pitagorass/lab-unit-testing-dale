import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import {
  OperationMath,
  QueryExceptionRequestDto,
} from './dto/math-exponent-request.dto';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('tests para mathGet', () => {
    // tests para mathGet
    it('should return correct result for addition operation', () => {
      const payload = {
        numOne: 2,
        numTwo: 3,
        operation: OperationMath.Addition,
      };
      const result = service.mathGet(payload);
      expect(result).toEqual({
        numeroUno: 2,
        operacion: 'Addition',
        numeroDos: 3,
        respuesta: 5,
      });
    });
    it('should return correct result for subtraction operation', () => {
      const payload = {
        numOne: 5,
        numTwo: 2,
        operation: OperationMath.Subtraction,
      };
      const result = service.mathGet(payload);
      expect(result).toEqual({
        numeroUno: 5,
        operacion: 'Subtraction',
        numeroDos: 2,
        respuesta: 3,
      });
    });
    it('should return correct result for multiplication operation', () => {
      const payload = {
        numOne: 5,
        numTwo: 2,
        operation: OperationMath.Multiplication,
      };
      const result = service.mathGet(payload);
      expect(result).toEqual({
        numeroUno: 5,
        operacion: 'Multiplication',
        numeroDos: 2,
        respuesta: 10,
      });
    });
    it('should return correct result for division operation', () => {
      const payload = {
        numOne: 5,
        numTwo: 2,
        operation: OperationMath.Division,
      };
      const result = service.mathGet(payload);
      expect(result).toEqual({
        numeroUno: 5,
        operacion: 'Division',
        numeroDos: 2,
        respuesta: 2.5,
      });
    });
    it('should return correct result for Exponentiation operation', () => {
      const payload = {
        numOne: 5,
        numTwo: 2,
        operation: OperationMath.Exponentiation,
      };
      const result = service.mathGet(payload);
      expect(result).toEqual({
        numeroUno: 5,
        operacion: 'Exponentiation',
        numeroDos: 2,
        respuesta: 25,
      });
    });
  });
  /* 
describe 
Es una función de Jest que se utiliza para agrupar pruebas 
relacionadas. El primer argumento que se le pasa a describe es una 
cadena que describe el propósito o el comportamiento que se está probando.

El segundo argumento es una función que contiene una o más 
llamadas a test o a describe, que se utilizan para definir las pruebas individuales. 
*/
  describe('Test for method matchersAssertions', () => {
    // matchers - Assertions
    // Cuando trabajamos con objetos usamos el metodo toEqual()
    /* 
    El método it o test de Jest es utilizado para definir una prueba unitaria. 
    Es decir, específica una función o un conjunto de acciones que se deben ejecutar 
    para verificar que una determinada funcionalidad o método de una clase o una librería 
    funciona de manera esperada.
    El método it toma dos argumentos: una descripción de la prueba 
    (como una cadena de texto) y una función que contiene la lógica de la prueba.
    */
    test('test obj', () => {
      const data = { name: 'Santiago', lastname: 'Vargas' };
      data.lastname = 'Acevedo';
      expect(data).toEqual({ name: 'Santiago', lastname: 'Acevedo' });
    });

    test('null', () => {
      const data = null;
      expect(data).toBeNull();
      expect(data).toBeDefined();
      expect(data).not.toBeUndefined();
    });

    test('booleans', () => {
      expect(true).toEqual(true);
      expect(false).toEqual(false);

      expect(0).toBeFalsy();
      expect('').toBeFalsy();
      expect(false).toBeFalsy();
    });

    test('string', () => {
      expect('Christoph').toMatch(/stop/);
    });

    test('List / Arrays', () => {
      const numArray = [1, 2, 3, 4, 5];
      expect(numArray).toContain(3);
    });
  });

  describe('Test for method Exception', () => {
    const payload: QueryExceptionRequestDto = {
      numOne: 0,
      numTwo: 2,
    };
    test('compiling android goes as expected', () => {
      expect(() => service.exceptionMath(payload)).toThrow();
      expect(() => service.exceptionMath(payload)).toThrow(Error);

      // You can also use a string that must be contained in the error message or a regexp
      expect(() => service.exceptionMath(payload)).toThrow(
        'Cannot divide by zero',
      );
      expect(() => service.exceptionMath(payload)).toThrow(/divide/);
    });
  });
  // agregar más tests para las demás operaciones
});
