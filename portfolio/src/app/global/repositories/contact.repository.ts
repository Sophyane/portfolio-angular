import { createStore, select } from '@ngneat/elf';
import { Contact } from '../models/global.model';
import { Injectable } from '@angular/core';
import { withEntities } from '@ngneat/elf-entities';

const contactStore = createStore({ name: 'contact' }, withEntities<Contact>());

@Injectable({ providedIn: 'root' })
export class ContactRepository {
  contact$ = contactStore.pipe(select((state) => state));
  updateContact(contact: Contact) {
    contactStore.update((state) => ({
      ...state,
      contact,
    }));
  }
}
