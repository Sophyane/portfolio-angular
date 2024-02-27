import { Component, inject, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT, NgClass, NgIf } from '@angular/common';
import { CoverComponent } from '../../components/cover/cover.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContactModalComponent } from '../../components/contact/contact-modal.component';
import { Dialog } from '@angular/cdk/dialog';

export interface DialogData {
  firstName: string;
  lastName: string;
  telephone: string;
  email: string;
  labelInterest: string;
  message: string;
}

@Component({
  selector: 'app-global-container',
  templateUrl: './global-container.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    CoverComponent,
    RouterOutlet,
    RouterLink,
    ContactModalComponent,
  ],
  styleUrls: ['./global-container.component.scss'],
})
export class GlobalContainerComponent implements OnInit {
  isDarkMode = false;
  public dialog: Dialog = inject(Dialog);
  contact: DialogData | undefined = {
    firstName: '',
    lastName: '',
    telephone: '',
    email: '',
    labelInterest: '',
    message: '',
  };

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      this.isDarkMode = localStorage.getItem('isDarkMode') === 'true';
      this.updateBodyClass();
    }
  }

  toggleDarkMode() {
    if (typeof localStorage !== 'undefined') {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('isDarkMode', String(this.isDarkMode));
      this.updateBodyClass();
    }
  }

  private updateBodyClass() {
    const className = this.isDarkMode ? 'dark' : 'light';
    this.renderer.setAttribute(this.document.body, 'class', className);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open<DialogData>(ContactModalComponent, {
      width: '250px',
    });

    dialogRef.closed.subscribe((result) => {
      console.log('The dialog was closed');
      this.contact = result;
    });
  }
}
