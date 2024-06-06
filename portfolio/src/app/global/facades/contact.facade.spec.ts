import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { ContactFacade } from './contact.facade';
import { ContactService } from '../services/contact.service';
import { ContactRepository } from '../repositories/contact.repository';
import { CoreFacade } from '../../core/core.facade';
import { Contact } from '../models/global.model';

describe('ContactFacade', () => {
  let service: ContactFacade;
  let mockContactService: jasmine.SpyObj<ContactService>;
  let mockContactRepository: jasmine.SpyObj<ContactRepository>;
  let mockCoreFacade: jasmine.SpyObj<CoreFacade>;

  beforeEach(() => {
    mockContactService = jasmine.createSpyObj('ContactService', ['getAllContacts', 'createContact']);
    mockContactRepository = jasmine.createSpyObj('ContactRepository', ['updateContact']);
    mockCoreFacade = jasmine.createSpyObj('CoreFacade', ['showSuccess', 'showError']);

    TestBed.configureTestingModule({
      providers: [
        ContactFacade,
        { provide: ContactService, useValue: mockContactService },
        { provide: ContactRepository, useValue: mockContactRepository },
        { provide: CoreFacade, useValue: mockCoreFacade },
      ],
    });
    service = TestBed.inject(ContactFacade);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all contacts', () => {
    const contacts: Contact[] = [{ id: '1', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', telephone: '1234567890', subject: 'Test', message: 'Test message' }];
    mockContactService.getAllContacts.and.returnValue(of(contacts));
    service.getAllContacts().subscribe((res) => {
      expect(res).toEqual(contacts);
      expect(mockCoreFacade.showSuccess).toHaveBeenCalledWith('Liste des contacts récupérée avec succès !');
    });
  });

  it('should handle error when getting all contacts', () => {
    mockContactService.getAllContacts.and.returnValue(throwError('Error'));
    service.getAllContacts().subscribe({
      error: (err) => {
        expect(err).toBeUndefined();
        expect(mockCoreFacade.showError).toHaveBeenCalledWith('Une erreur est survenue lors de la récupération des contacts, veuillez réessayer plus tard. Merci !');
      },
    });
  });
  it('should create contact', () => {
    const contact: Contact = { id: '1', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', telephone: '1234567890', subject: 'Test', message: 'Test message' };
    mockContactService.createContact.and.returnValue(of(contact));
    service.createContact(contact).subscribe((res) => {
      expect(res).toEqual(contact);
      expect(mockContactRepository.updateContact).toHaveBeenCalledWith(contact);
      expect(mockCoreFacade.showSuccess).toHaveBeenCalledWith('Votre message est bien envoyé ! Merci pour votre intérêt, je  reviens vers vous dès que possible :) ');
    });
  });

  it('should handle error when creating contact', () => {
    const contact: Contact = { id: '1', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', telephone: '1234567890', subject: 'Test', message: 'Test message' };
    mockContactService.createContact.and.returnValue(throwError('Error'));
    service.createContact(contact).subscribe({
      error: (err) => {
        expect(err).toBeUndefined();
        expect(mockCoreFacade.showSuccess).toHaveBeenCalledWith("Une erreur est survenue lors de l'envoi de votre message, veuillez réessayer plus tard. Merci !");
      },
    });
  });

  it('should update contact', () => {
    const contact: Contact = { id: '1', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', telephone: '1234567890', subject: 'Test', message: 'Test message' };
    service.updateContact(contact);
    expect(mockContactRepository.updateContact).toHaveBeenCalledWith(contact);
});
});