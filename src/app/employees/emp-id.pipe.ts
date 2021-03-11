import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empId'
})
export class EmpIdPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "e" + (value);
  }

}
