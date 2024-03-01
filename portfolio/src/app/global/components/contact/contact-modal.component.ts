import { Component, Inject, inject, OnInit } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { DialogData } from '../../containers/global-container/global-container.component';
import { MatFormField } from '@angular/material/form-field';
import {
  EmailValidator,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [MatFormField, ReactiveFormsModule],
  templateUrl: './contact-modal.component.html',
  styleUrl: './contact-modal.component.scss',
})
export class ContactModalComponent implements OnInit {
  public dialogRef: DialogRef = inject(DialogRef);
  public fb: FormBuilder = inject(FormBuilder);
  @Inject(DIALOG_DATA) public data!: DialogData;
  contactFormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    telephone: [''],
    email: ['', Validators.required, EmailValidator],
    subject: [''],
    message: ['', Validators.required],
  });

  ngOnInit() {
    this.contactFormGroup.valueChanges.subscribe((value) => {
      console.log('form: ', value);
    });
  }
}
