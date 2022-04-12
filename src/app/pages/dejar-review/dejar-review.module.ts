import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DejarReviewPageRoutingModule } from './dejar-review-routing.module';

import { DejarReviewPage } from './dejar-review.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DejarReviewPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DejarReviewPage]
})
export class DejarReviewPageModule {}
