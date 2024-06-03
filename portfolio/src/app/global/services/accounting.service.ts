import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AccountingService {
   accountsWithBalance: Map<string, number> = new Map();

  public async createAccount(accountID: string): Promise<void> {
    if (this.accountsWithBalance.has(accountID)) {
      console.log('ACCOUNT_EXISTS');
      throw Error('ACCOUNT_EXISTS');
    }
    console.log('ACCOUNT DOES NOT EXIST');
    this.accountsWithBalance.set(accountID, 0);
  }

  public async topUp(accountID: string, amount: number): Promise<number> {
    if (!this.accountsWithBalance.has(accountID)) {
      throw Error('ACCOUNT_DOES_NOT_EXIST');
    }
    this.accountsWithBalance.set(accountID, this.accountsWithBalance.get(accountID)! + amount);
    return this.accountsWithBalance.get(accountID)!;
  }
}
