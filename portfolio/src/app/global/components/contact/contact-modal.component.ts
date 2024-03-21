import { Component, inject, Inject, OnInit } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { MatFormField } from '@angular/material/form-field';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Contact } from '../../models/global.model';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [MatFormField, ReactiveFormsModule],
  templateUrl: './contact-modal.component.html',
  styleUrl: './contact-modal.component.scss',
})
export class ContactModalComponent implements OnInit {
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

  ngOnInit() {
    this.contactFormGroup.valueChanges.subscribe((value) => {
      console.log('form: ', value);
    });
  }

  onSend() {
    if (this.contactFormGroup.valid) {
      this.dialogRef.close(this.contactFormGroup.value);
    }
  }
}
