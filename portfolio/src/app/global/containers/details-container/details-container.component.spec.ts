import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsContainerComponent } from './details-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DetailsContainerComponent', () => {
  let component: DetailsContainerComponent;
  let fixture: ComponentFixture<DetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsContainerComponent, BrowserAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
