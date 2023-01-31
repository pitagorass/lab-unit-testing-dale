import { Injectable } from '@nestjs/common';
import {
  OperationMath,
  QueryExceptionRequestDto,
  QueryMathRequestDto,
} from './dto/math-exponent-request.dto';

@Injectable()
export class AppService {
  mathGet(payload: QueryMathRequestDto): object {
    let resExponentiation: number;

    switch (payload.operation) {
      case OperationMath.Addition:
        resExponentiation = payload.numOne + payload.numTwo;
        break;

      case OperationMath.Subtraction:
        resExponentiation = payload.numOne - payload.numTwo;
        break;

      case OperationMath.Multiplication:
        resExponentiation = payload.numOne * payload.numTwo;
        break;

      case OperationMath.Division:
        resExponentiation = payload.numOne / payload.numTwo;
        break;

      case OperationMath.Exponentiation:
        resExponentiation = payload.numOne ** payload.numTwo;
        break;

      case OperationMath.SquareRoot:
        resExponentiation = Math.sqrt(payload.numOne);
        break;

      case OperationMath.Logarithm:
        resExponentiation = Math.log(payload.numTwo);
        break;
      default:
        break;
    }
    return {numeroUno: payload.numOne, operacion: payload.operation, numeroDos: payload.numTwo, respuesta: resExponentiation};
  }

  exceptionMath(numbers: QueryExceptionRequestDto) {
    if (numbers.numOne == 0) {
      throw new Error('Cannot divide by zero');
    }
    return numbers.numOne / numbers.numTwo;
  }

  
}
