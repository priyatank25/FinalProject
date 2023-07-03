import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BysearchComponent } from './bysearch.component';

describe('BysearchComponent', () => {
  let component: BysearchComponent;
  let fixture: ComponentFixture<BysearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BysearchComponent]
    });
    fixture = TestBed.createComponent(BysearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
