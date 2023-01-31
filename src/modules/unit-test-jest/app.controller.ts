import { Controller, Get, Query } from '@nestjs/common';
import { Calculator } from '../../providers/claculator-date/calculator-date.service';
import { AppService } from './app.service';
import { QueryExceptionRequestDto, QueryCalDateRequestDto, QueryMathRequestDto } from './dto/math-exponent-request.dto';

@Controller('unit-test-examples')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly calculator: Calculator,
  ) {}

  @Get('math')
  getMath(@Query() payload: QueryMathRequestDto): object {
    return this.appService.mathGet(payload);
  }

  @Get('exception')
  async getException(
    @Query() numbers: QueryExceptionRequestDto,
  ): Promise<any> {
    return this.appService.exceptionMath(numbers);
  }

  @Get('claculatorDate')
  async calculation(@Query() payload: QueryCalDateRequestDto): Promise<Date> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.calculator.addDays(payload.fecha, payload.dias));
      }, 2000);
    });
  }
}
