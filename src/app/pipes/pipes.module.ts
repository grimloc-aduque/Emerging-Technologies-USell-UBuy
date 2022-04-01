import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FechaPipe } from './fecha.pipe';
import { PuntajeReviewsPipe } from './puntaje-reviews.pipe';



@NgModule({
  declarations: [
    FechaPipe,
    PuntajeReviewsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FechaPipe,
    PuntajeReviewsPipe
  ]
})
export class PipesModule { }
