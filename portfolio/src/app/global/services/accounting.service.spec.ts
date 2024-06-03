import { TestBed } from '@angular/core/testing';
import { AccountingService } from './accounting.service';  // Assurez-vous que le chemin est correct

describe('AccountingService', () => {
  let service: AccountingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a new account', async () => {
    const accountID = 'test-account';
    await service.createAccount(accountID);
    const balance = await service.topUp(accountID, 0); // Check initial balance
    expect(balance).toBe(0);
  });

  it('should throw an error when creating an account that already exists', async () => {
    const accountID = 'existing-account';
    await service.createAccount(accountID);
    await expectAsync(service.createAccount(accountID)).toBeRejectedWithError('ACCOUNT_EXISTS');
  });

  it('should top up an account', async () => {
    const accountID = 'top-up-account';
    await service.createAccount(accountID);
    let balance = await service.topUp(accountID, 100);
    expect(balance).toBe(100);

    balance = await service.topUp(accountID, 50);
    expect(balance).toBe(150);
  });

  it('should throw an error when topping up a non-existing account', async () => {
    const accountID = 'non-existing-account';
    await expectAsync(service.topUp(accountID, 100)).toBeRejectedWithError('ACCOUNT_DOES_NOT_EXIST');
  });
});
