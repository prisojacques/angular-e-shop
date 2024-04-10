import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardInlineComponent } from './product-card-inline.component';

describe('ProductCardInlineComponent', () => {
  let component: ProductCardInlineComponent;
  let fixture: ComponentFixture<ProductCardInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardInlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductCardInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
