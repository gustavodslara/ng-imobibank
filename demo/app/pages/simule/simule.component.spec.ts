import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuleComponent } from './simule.component';

describe('SimuleComponent', () => {
  let component: SimuleComponent;
  let fixture: ComponentFixture<SimuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
