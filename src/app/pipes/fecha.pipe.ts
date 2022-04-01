import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(timestamp): String {
    let date = new Date(timestamp['seconds'] * 1000)
    return String(date.getDate()) + " - " +  String(date.getMonth()) + " - " + String(date.getFullYear());
  }

}
