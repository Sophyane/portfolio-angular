import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ContactModalComponent } from './contact-modal.component';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { ContactFacade } from '../../facades/contact.facade';
import { HttpClientModule } from '@angular/common/http';
import { Contact } from '../../models/global.model';

class MockDialogRef {
  close(value?: any): void {}
}

describe('ContactModalComponent', () => {
  let component: ContactModalComponent;
  let fixture: ComponentFixture<ContactModalComponent>;
  let mockDialogRef: MockDialogRef;
  let mockContactFacade: jasmine.SpyObj<ContactFacade>;

  beforeEach(async () => {
    mockDialogRef = new MockDialogRef();
    mockContactFacade = jasmine.createSpyObj('ContactFacade', ['sendContact']); 

    await TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        HttpClientModule,
        ContactModalComponent, 
      ],
      providers: [
        { provide: DialogRef, useValue: mockDialogRef },
        { provide: ContactFacade, useValue: mockContactFacade },
        { provide: DIALOG_DATA, useValue: { firstName: 'John', lastName: 'Doe', telephone: '123456789', email: 'john.doe@example.com', subject: 'Test', message: 'This is a test message' } as Contact }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with provided data', () => {
    expect(component.contactFormGroup.value).toEqual({
      firstName: '',
      lastName: '',
      telephone: '',
      email: '',
      subject: '',
      message: ''
    });
  });

  it('should close the dialog with form data when form is valid and onSend is called', () => {
    spyOn(component.dialogRef, 'close');
    component.contactFormGroup.setValue({
      firstName: 'John',
      lastName: 'Doe',
      telephone: '123456789',
      email: 'john.doe@example.com',
      subject: 'Test',
      message: 'This is a test message'
    });

    component.onSend();

    expect(component.dialogRef.close).toHaveBeenCalledWith({
      firstName: 'John',
      lastName: 'Doe',
      telephone: '123456789',
      email: 'john.doe@example.com',
      subject: 'Test',
      message: 'This is a test message'
    });
  });

  it('should not close the dialog when form is invalid and onSend is called', () => {
    spyOn(component.dialogRef, 'close');
    component.contactFormGroup.setValue({
      firstName: '',
      lastName: 'Doe',
      telephone: '123456789',
      email: 'john.doe@example.com',
      subject: 'Test',
      message: 'This is a test message'
    });

    component.onSend();

    expect(component.dialogRef.close).not.toHaveBeenCalled();
  });
});
