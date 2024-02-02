import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsInfoCardComponent } from './details-info-card.component';

describe('DetailsInfoCardComponent', () => {
  let component: DetailsInfoCardComponent;
  let fixture: ComponentFixture<DetailsInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsInfoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
