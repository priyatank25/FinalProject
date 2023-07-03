import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TslaComponent } from './tsla.component';

describe('TslaComponent', () => {
  let component: TslaComponent;
  let fixture: ComponentFixture<TslaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TslaComponent]
    });
    fixture = TestBed.createComponent(TslaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
