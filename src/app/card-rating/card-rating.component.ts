import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-card-rating',
  templateUrl: './card-rating.component.html',
  styleUrls: ['./card-rating.component.css'],
})
export class CardRatingComponent implements OnInit {
  mostraValor(): void {
    let rate = sessionStorage.getItem('Rate');
    if (rate) {
      let data = rate;
      data = JSON.parse(data);
      (<HTMLInputElement>document.getElementById('value')).innerText = data;
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.mostraValor();
  }
}
