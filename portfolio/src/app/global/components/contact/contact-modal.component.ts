import { Component, inject, Inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Contact } from '../../models/global.model';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [MatFormField, ReactiveFormsModule, MatButton, MatLabel, MatInput],
  templateUrl: './contact-modal.component.html',
  styleUrl: './contact-modal.component.scss',
})
export class ContactModalComponent {
  public dialogRef: DialogRef = inject(DialogRef);
  public fb: NonNullableFormBuilder = inject(NonNullableFormBuilder);
  @Inject(DIALOG_DATA) public data!: Contact;
  contactFormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    telephone: [''],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  onSend() {
    if (this.contactFormGroup.valid) {
      console.log('send contact to API...', this.contactFormGroup.value);
      this.dialogRef.close(this.contactFormGroup.value);
    }
  }
}
