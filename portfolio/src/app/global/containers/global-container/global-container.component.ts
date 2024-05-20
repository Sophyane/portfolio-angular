import {
  Component,
  inject,
  Inject,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DOCUMENT, NgClass, NgIf } from '@angular/common';
import { CoverComponent } from '../../components/cover/cover.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContactModalComponent } from '../../components/contact/contact-modal.component';
import { Dialog } from '@angular/cdk/dialog';
import { Subscription } from 'rxjs';
import { ContactFacade } from '../../facades/contact.facade';
import { Contact } from '../../models/global.model';

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
export class GlobalContainerComponent implements OnInit, OnDestroy {
  isDarkMode = false;
  public dialog: Dialog = inject(Dialog);
  private contactFacade: ContactFacade = inject(ContactFacade);
  subscription: Subscription = new Subscription();
  contact!: Contact;

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
    const dialogRef = this.dialog.open<Contact>(ContactModalComponent, {
      panelClass: 'contact-dialog-container',
      width: '70%',
    });

    this.subscription.add(
      dialogRef.closed.subscribe((contact) => {
        if (contact) {
          const contactToSave: Omit<Contact, 'id'> = {
            firstName: contact?.firstName,
            lastName: contact.lastName,
            email: contact.email,
            telephone: contact.telephone,
            subject: contact.subject,
            message: contact.message,
          };
          this.contactFacade.createContact(contactToSave).subscribe();
        } else {
          this.contactFacade.updateContact(this.contact);
        } })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
