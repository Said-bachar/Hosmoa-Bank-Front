import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'balance'
})
export class BalancePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value+' DH';
  }

}
