import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCalculateComponent } from './view-calculate.component';

describe('ViewCalculateComponent', () => {
  let component: ViewCalculateComponent;
  let fixture: ComponentFixture<ViewCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCalculateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
