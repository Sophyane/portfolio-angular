import { TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { ContactService } from './contact.service';
import { Contact } from '../models/global.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ContactService', () => {
  let contactService: ContactService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContactService]
    });

    contactService = TestBed.inject(ContactService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(contactService).toBeTruthy();
  });

  describe('getAllContacts', () => {
    it('should return all contacts', (done: DoneFn) => {
      const expectedContacts: Contact[] = [
        {
          id: '1',
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com',
          telephone: '1234567890',
          subject: 'Test Subject',
          message: 'Test Message'
        },
        {
          id: '2',
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jane@example.com',
          telephone: '0987654321',
          subject: 'Another Test Subject',
          message: 'Another Test Message'
        }
      ];

      contactService.getAllContacts().subscribe({
        next: (contacts) => {
          expect(contacts).toEqual(expectedContacts);
          done();
        },
        error: done.fail
      });

      const req = httpTestingController.expectOne(`${contactService.contactUrl}/allContacts`);
      expect(req.request.method).toEqual('GET');
      req.flush(expectedContacts);
    });
  });

  describe('createContact', () => {
    it('should create a new contact', (done: DoneFn) => {
      const newContact: Omit<Contact, 'id'> = {
        firstName: 'Dan',
        lastName: 'Brown',
        email: 'new@example.com',
        telephone: '9876543210',
        subject: 'New Subject',
        message: 'New Message'
      };

      const createdContact: Contact = {
        id: '3',
        ...newContact
      };

      contactService.createContact(newContact).subscribe({
        next: (contact: Contact) => {
          expect(contact).toEqual(createdContact);
          done();
        },
        error: done.fail
      });

      const req = httpTestingController.expectOne(contactService.contactUrl);
      expect(req.request.method).toEqual('POST');
      req.flush(createdContact);
    });
  });
});
