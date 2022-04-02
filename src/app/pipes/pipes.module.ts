import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FechaPipe } from './fecha.pipe';
import { PuntajeReviewsPipe } from './puntaje-reviews.pipe';
import { RangePipe } from './range.pipe';



@NgModule({
  declarations: [
    FechaPipe,
    PuntajeReviewsPipe,
    RangePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FechaPipe,
    PuntajeReviewsPipe,
    RangePipe
  ]
})
export class PipesModule { }
