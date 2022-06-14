import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardRatingComponent } from './card-rating/card-rating.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: '', component: CardComponent},
  { path: 'cardrating', component: CardRatingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
