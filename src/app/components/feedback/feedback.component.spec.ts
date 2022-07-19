import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FEEDBACKComponent } from './feedback.component';

describe('FEEDBACKComponent', () => {
  let component: FEEDBACKComponent;
  let fixture: ComponentFixture<FEEDBACKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FEEDBACKComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FEEDBACKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
