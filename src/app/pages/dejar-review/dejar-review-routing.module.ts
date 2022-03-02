import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DejarReviewPage } from './dejar-review.page';

const routes: Routes = [
  {
    path: '',
    component: DejarReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DejarReviewPageRoutingModule {}
