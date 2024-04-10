import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestRateComponent } from './best-rate.component';

describe('BestRateComponent', () => {
  let component: BestRateComponent;
  let fixture: ComponentFixture<BestRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestRateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
