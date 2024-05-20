import { ContactRepository } from '../repositories/contact.repository';
import { inject, Injectable } from '@angular/core';
import { Contact } from '../models/global.model';
import { ContactServiceService } from '../services/contact-service.service';
import { catchError, EMPTY, Observable, tap } from 'rxjs';
import { CoreFacade } from '../../core/core.facade';
import { catchError, EMPTY, map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContactFacade {
  public contactRepository: ContactRepository = inject(ContactRepository);
  contactService = inject(ContactServiceService);
  public contact$ = this.contactRepository.contact$;
  private coreFacade = inject(CoreFacade);

  getAllContacts(): Observable<Contact[]> {
    return this.contactService.getAllContacts().pipe(
      tap((contacts) => {

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

  createContact(contact: Omit<Contact, 'id'>): Observable<Contact> {
    return this.contactService.createContact(contact).pipe(
      tap((contact) => {
        this.contactRepository.updateContact(contact);
        this.coreFacade.showSuccess(
          'Votre message est bien envoyé ! Merci pour votre intérêt, je  reviens vers vous dès que possible :) ',
        );
        return contact;
      }),
      catchError((error) => {
        console.error('Error: ', error);
        this.coreFacade.showSuccess(
          "Une erreur est survenue lors de l'envoi de votre message, veuillez réessayer plus tard. Merci !",
        );
        return EMPTY;
      }),
    );
  }


  public updateContact(contact: Contact) {
    this.contactRepository.updateContact(contact);
  }
}
