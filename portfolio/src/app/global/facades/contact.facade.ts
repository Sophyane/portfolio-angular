import { ContactRepository } from '../repositories/contact.repository';
import { inject, Injectable } from '@angular/core';
import { Contact } from '../models/global.model';

@Injectable({ providedIn: 'root' })
export class ContactFacade {
  public contactRepository: ContactRepository = inject(ContactRepository);

  public contact$ = this.contactRepository.contact$;

  public updateContact(contact: Contact) {
    this.contactRepository.updateContact(contact);
  }
}
