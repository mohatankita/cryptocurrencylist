import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCryptoCurrencyComponent } from './detail-crypto-currency.component';

describe('DetailCryptoCurrencyComponent', () => {
  let component: DetailCryptoCurrencyComponent;
  let fixture: ComponentFixture<DetailCryptoCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCryptoCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCryptoCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
