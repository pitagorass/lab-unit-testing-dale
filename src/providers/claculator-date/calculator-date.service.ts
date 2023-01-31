import { Injectable } from '@nestjs/common';

@Injectable()
export class Calculator {
  constructor() {}

  // Método para sumar días a una fecha dada
  async addDays(date: Date, days: number): Promise<Date> {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
  }

  // Método para restar días a una fecha dada
  subtractDays(date: Date, days: number): Date {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - days);
    return newDate;
  }

  // Método para calcular la diferencia en días entre dos fechas
  diffInDays(date1: Date, date2: Date): number {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }
}
