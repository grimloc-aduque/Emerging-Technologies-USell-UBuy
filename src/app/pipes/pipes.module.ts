import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FechaPipe } from './fecha.pipe';
import { RangePipe } from './range.pipe';



@NgModule({
  declarations: [
    FechaPipe,
    RangePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FechaPipe,
    RangePipe
  ]
})
export class PipesModule { }
