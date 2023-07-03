import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowportfolioComponent } from './showportfolio.component';

describe('ShowportfolioComponent', () => {
  let component: ShowportfolioComponent;
  let fixture: ComponentFixture<ShowportfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowportfolioComponent]
    });
    fixture = TestBed.createComponent(ShowportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
