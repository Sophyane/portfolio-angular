import { Component } from '@angular/core';
import { AccountingService } from '../../services/accounting.service';

@Component({
  selector: 'app-map-container',
  standalone: true,
  imports: [],
  templateUrl: './map-container.component.html',
  styleUrl: './map-container.component.scss'
})
export class MapContainerComponent {
  message: string = '';

  constructor(private accountingService: AccountingService) { }

  async createAccount(accountInput: HTMLInputElement) {
    console.log('account name', accountInput.value);
    const accountName = accountInput.value;
    try {
      await this.accountingService.createAccount(accountName);
      this.message = 'Successfully added account';
    } catch (error: any) {
      if (error instanceof Error && error.message === 'ACCOUNT_EXISTS') {
        this.message = 'Account already exists';
      } else {
        this.message = 'An error occurred';
      }
    }
    accountInput.value = ''; // Clear the input after creating the account

    this.accountingService.accountsWithBalance.forEach((value, key) => {
      console.log('key: ', key, 'value: ', value);
    });
  }

  async topUpAccount(accountInput: HTMLInputElement, amountInput: HTMLInputElement) {
    const accountName = accountInput.value;
    const amount = parseFloat(amountInput.value);
    if (amount <= 0) {
      this.message = 'INVALID INPUT';
      return;
    }
    try {
      const newBalance = await this.accountingService.topUp(accountName, amount);
      this.message = `Current balance: ${newBalance}`;

    } catch (error: any) {
      if (error instanceof Error && error.message === 'ACCOUNT_DOES_NOT_EXIST') {
        this.message = 'Account does not exist';
      } else if (error instanceof Error && error.message === 'INVALID_INPUT') {
        this.message = 'INVALID INPUT';
      } else {
        this.message = 'An error occurred';
      }
    }
    accountInput.value = ''; // Clear the inputs after topping up the account
    amountInput.value = '';
    this.accountingService.accountsWithBalance.forEach((value, key) => {
      console.log('kiki: ', key, 'vava: ', value);
    });
  }
}

