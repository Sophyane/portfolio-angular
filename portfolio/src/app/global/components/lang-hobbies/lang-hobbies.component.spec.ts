import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangHobbiesComponent } from './lang-hobbies.component';

describe('LangHobbiesComponent', () => {
  let component: LangHobbiesComponent;
  let fixture: ComponentFixture<LangHobbiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangHobbiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LangHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
