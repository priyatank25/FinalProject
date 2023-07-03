import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosoftComponent } from './microsoft.component';

describe('MicrosoftComponent', () => {
  let component: MicrosoftComponent;
  let fixture: ComponentFixture<MicrosoftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicrosoftComponent]
    });
    fixture = TestBed.createComponent(MicrosoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
