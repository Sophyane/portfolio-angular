import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environnements/dev.environnement";
import { Observable } from "rxjs";
import { Contact } from "../models/global.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactUrl: string = environment.baseUrl + '/contact';
  public http: HttpClient = inject(HttpClient);

  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactUrl + '/allContacts');
  }

  createContact(contact: Omit<Contact, 'id'>): Observable<Contact> {
    return this.http.post<Contact>(this.contactUrl, contact);
  }
}
