import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalContainerComponent } from './global-container.component';
import { ContactFacade } from '../../facades/contact.facade';
import { Dialog } from '@angular/cdk/dialog';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('GlobalContainerComponent', () => {
  let component: GlobalContainerComponent;
  let fixture: ComponentFixture<GlobalContainerComponent>;

  const mockDialog = {
    open: jasmine.createSpy('open').and.returnValue({
      closed: of({}),
    }),
  };

  const mockContactFacade = {
    createContact: jasmine.createSpy('createContact').and.returnValue(of({})),
    updateContact: jasmine.createSpy('updateContact').and.returnValue(of({})),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalContainerComponent],
      providers: [
        { provide: Dialog, useValue: mockDialog },
        { provide: ContactFacade, useValue: mockContactFacade },
        { provide: ActivatedRoute, useValue: { params: of({ id: 123 }) } }
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open dialog', () => {
    component.openDialog();
    expect(mockDialog.open).toHaveBeenCalled();
    expect(mockContactFacade.createContact).toHaveBeenCalled();
  });
});