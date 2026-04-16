import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contactFormat',
  standalone: true,
})
export class ContactFormatPipe implements PipeTransform {
  transform(
    value: string,
    mode: 'name' | 'status' | 'email' = 'name'
  ): string {
    if (!value) {
      return '';
    }

    switch (mode) {
      case 'name':
        return value
          .toLowerCase()
          .split(' ')
          .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
          .join(' ');
      case 'status':
        return value === 'active' ? 'Activo' : 'Inactivo';
      case 'email':
        return value.toLowerCase();
      default:
        return value;
    }
  }
}
