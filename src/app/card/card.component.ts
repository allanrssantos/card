import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  onClick(event: any) {
    sessionStorage.setItem('Rate', JSON.stringify(event));
  }
  constructor(private router: Router) {}

  cardRating() {
    this.router.navigate(['/cardrating']);
  }
}
