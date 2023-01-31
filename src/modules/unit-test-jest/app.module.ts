import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CalculatorModule } from 'src/providers/claculator-date/calculator-date.module';
import { Calculator } from '../../providers/claculator-date/calculator-date.service';
import { CharacterModule } from '../star-wars/character.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/demo'),
    CharacterModule,
    CalculatorModule,
  ],
  controllers: [AppController],
  providers: [AppService, Calculator],
})
export class AppModule {}
