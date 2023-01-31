import { IsNumber, IsNotEmpty, IsString, IsDate } from 'class-validator';

export enum OperationMath {
  Addition ='Addition',
  Subtraction = 'Subtraction',
  Multiplication = 'Multiplication',
  Division = 'Division',
  Exponentiation = 'Exponentiation',
  SquareRoot = 'SquareRoot',
  Logarithm = 'Logarithm'
}

export class QueryMathRequestDto {
  @IsNumber()
  @IsNotEmpty()
  public operation: OperationMath;

  @IsNumber()
  @IsNotEmpty()
  public numOne: number;

  @IsNumber()
  @IsNotEmpty()
  public numTwo: number;
}

export class QueryExceptionRequestDto {
  @IsNumber()
  @IsNotEmpty()
  public numOne: number;

  @IsNumber()
  @IsNotEmpty()
  public numTwo: number;
}

export class QueryCalDateRequestDto {
  @IsDate()
  @IsNotEmpty()
  public fecha: Date;

  @IsNumber()
  @IsNotEmpty()
  public dias: number;
}