import { Pipe, PipeTransform } from '@angular/core';
import { Review } from '../interfaces/review';

@Pipe({
  name: 'reviewScore'
})
export class ReviewScorePipe implements PipeTransform {

  transform(reviews: Review[]): number {
    if(reviews.length == 0){
      return 0;
    }

    let calificacion_total:number = 0;
    reviews.forEach(
      review => {
        calificacion_total = calificacion_total + review.calificacion
      }
    )
    return calificacion_total/reviews.length;
  }
}
