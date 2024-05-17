import { ContactRepository } from '../repositories/contact.repository';
import { inject, Injectable } from '@angular/core';
import { Contact } from '../models/global.model';
import { ContactServiceService } from '../services/contact-service.service';
import { catchError, EMPTY, map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContactFacade {
  public contactRepository: ContactRepository = inject(ContactRepository);
  contactService = inject(ContactServiceService);
  public contact$ = this.contactRepository.contact$;

  getAllContacts(): Observable<Contact[]> {
    return this.contactService.getAllContacts().pipe(
      map((contacts) => {
        console.log(contacts);
        return contacts;
      }),
      catchError((error) => {
        console.error('Error: ', error);
        return EMPTY;
      }),
    );
  }

  public updateContact(contact: Contact) {
    this.contactRepository.updateContact(contact);
  }
}
