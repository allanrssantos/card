import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CardRatingComponent } from './card-rating.component';

describe('CardRatingComponent', () => {
  let component: CardRatingComponent;
  let fixture: ComponentFixture<CardRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CardRatingComponent]
    });
    fixture = TestBed.createComponent(CardRatingComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'mostraValor').and.callThrough();
      component.ngOnInit();
      fixture.autoDetectChanges();
      expect(component.mostraValor).toHaveBeenCalled();
    });
  });
});
