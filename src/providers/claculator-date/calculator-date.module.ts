import { Module } from '@nestjs/common';
import { Calculator } from './calculator-date.service';

@Module({
    providers: [Calculator],
  })
  export class CalculatorModule {}
