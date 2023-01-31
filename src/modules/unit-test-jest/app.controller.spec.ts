import { Test, TestingModule } from '@nestjs/testing';
import { Calculator } from '../../providers/claculator-date/calculator-date.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  OperationMath,
  QueryExceptionRequestDto,
  QueryMathRequestDto,
  QueryCalDateRequestDto
} from './dto/math-exponent-request.dto';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;
  let calculator: Calculator;
  /* 
  beforeEach
  Es un método de Jest que se utiliza para ejecutar código antes de cada 
  prueba dentro de un bloque describe. Es útil para configurar cualquier estado o 
  valores predeterminados necesarios para cada prueba, o para limpiar cualquier 
  estado de prueba anterior antes de ejecutar la siguiente prueba. 

  El código dentro de beforeEach se ejecutará antes de cada prueba dentro del 
  bloque describe en el que se encuentra, y se puede utilizar varias veces en un 
  mismo bloque describe para configurar un estado diferente para diferentes pruebas.
  */
  beforeEach(async () => {
    /* 
    TestingModule es una clase que proporciona una interfaz para configurar y personalizar 
    el comportamiento del módulo durante las pruebas, permitiendo a los desarrolladores 
    proporcionar dependencias específicas para sus servicios, controladores y proveedores. 

     El código anterior crea un módulo de prueba que contiene un controlador AppController, 
     un proveedor AppService y un proveedor Calculator. El método createTestingModule() 
     crea un entorno de pruebas con los parámetros especificados como argumentos. 
     El método compile() compila el entorno de pruebas recién creado para que esté 
     listo para la ejecución de pruebas.
    */
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, Calculator],
    }).compile();
    /* 
    El método get de la clase Test se utiliza para obtener una instancia de una determinada clase
    permitiendo a los desarrolladores interactuar con el controlador (clase o instancia) durante 
    una prueba y verificar que se comporte de la manera esperada.. 
    */
    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
    calculator = app.get<Calculator>(Calculator);
  });

  describe('getMath', () => {
    /* 
    El método it de Jest es utilizado para definir una prueba unitaria. 
    Es decir, específica una función o un conjunto de acciones que se deben ejecutar 
    para verificar que una determinada funcionalidad o método de una clase o una librería 
    funciona de manera esperada.
    El método it toma dos argumentos: una descripción de la prueba 
    (como una cadena de texto) y una función que contiene la lógica de la prueba.
    */
    it('should return the result of math calculation', () => {
      const objecto = {
        numeroUno: '3',
        operacion: 'Division',
        numeroDos: '6',
        respuesta: 0.5,
      };
      const payload: QueryMathRequestDto = {
        numOne: 2,
        numTwo: 3,
        operation: OperationMath.Addition,
      };
      /* 
      spyOn
      Es una función de Jest que permite crear un "espía" (spy) sobre una función 
      existente. Un espía es un objeto que te permite monitorear las llamadas a una 
      función y verificar si se han realizado las llamadas esperadas. 
      Puedes usar un espía para validar que una función se llamó un número específico de 
      veces, con argumentos específicos, y para retornar un valor específico. 
      */
      jest.spyOn(appService, 'mathGet').mockImplementation(() => objecto);
      expect(appController.getMath(payload)).toBe(objecto);
    });
  });

  describe('getException', () => {
    it('should throw an exception',async () => {
      const payload: QueryExceptionRequestDto = { numOne: 0, numTwo: 3 };

      jest.spyOn(appService, 'exceptionMath').mockImplementation(() => {
        throw new Error('Error');
      });
      expect(appController.getException(payload)).rejects.toThrowError();
    });
  });

  describe('Calculator Date', () => {
    jest.setTimeout(3000);
    it('should return the adittion day and date', async () => {
      const payload: QueryCalDateRequestDto = {
        fecha: new Date(2020, 1, 1),
        dias: 5,
      };
      const expectedDate = new Date(2020, 1, 6);
      jest
        .spyOn(calculator, 'addDays')
        .mockImplementation(() => { return Promise.resolve(expectedDate) });
      expect(await appController.calculation(payload)).toEqual(expectedDate)
    });
  });
});
