// Importaciones que vamos a usar
import { Injectable } from '@nestjs/common';

@Injectable() //inyecciones
export class AppService {
  getHello(): string {
    return 'Nuevos cambios para auto-merge';
  }
}
