import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparecurrencyComponent } from './comparecurrency.component';

describe('ComparecurrencyComponent', () => {
  let component: ComparecurrencyComponent;
  let fixture: ComponentFixture<ComparecurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparecurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparecurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
