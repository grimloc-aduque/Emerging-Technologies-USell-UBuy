import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(rating:number): Number[] {
    return Array(rating).fill(0);
  }

}
