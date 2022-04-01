import { Pipe, PipeTransform } from '@angular/core';
import { Review } from '../interfaces/review';

@Pipe({
  name: 'puntajeReviews'
})
export class PuntajeReviewsPipe implements PipeTransform {

  transform(reviews: Review[]): number {
    let calificacion_total:number = 0;
    reviews.forEach(
      review => {
        calificacion_total = calificacion_total + review.calificacion
      }
    )
    return calificacion_total/reviews.length;
  }

}
