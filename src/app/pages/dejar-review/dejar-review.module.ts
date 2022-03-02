import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DejarReviewPageRoutingModule } from './dejar-review-routing.module';

import { DejarReviewPage } from './dejar-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DejarReviewPageRoutingModule
  ],
  declarations: [DejarReviewPage]
})
export class DejarReviewPageModule {}
