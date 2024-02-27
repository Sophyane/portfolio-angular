import { Component, Inject, inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { DialogData } from '../../containers/global-container/global-container.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact-modal.component.html',
  styleUrl: './contact-modal.component.scss',
})
export class ContactModalComponent {
  public dialogRef: DialogRef = inject(DialogRef);
  @Inject(DIALOG_DATA) public data!: DialogData;
}
