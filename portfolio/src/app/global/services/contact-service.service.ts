import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environnements/dev.environnement';
import { Observable } from 'rxjs';
import { Contact } from '../models/global.model';
import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environnements/dev.environnement';
import { Observable } from 'rxjs';
import { Contact } from '../models/global.model';

@Injectable({
  providedIn: 'root',
})
export class ContactServiceService {
  contactUrl: string = environment.baseUrl + '/contact';
  http: HttpClient = inject(HttpClient);

  headersOptions = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactUrl + '/allContacts');
  }

  createContact(contact: Omit<Contact, 'id'>): Observable<Contact> {
    return this.http.post<Contact>(this.contactUrl, contact);
  }
}
