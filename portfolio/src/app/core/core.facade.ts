import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CoreFacade {
  private snack: MatSnackBar = inject(MatSnackBar);

  showError(message: string) {
    this.snack.open(message, 'x', {
      duration: 5000,
      panelClass: ['error-snackbar'],
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }

  showSuccess(message: string) {
    this.snack.open(message, 'x', {
      duration: 5000,
      panelClass: ['success-snackbar'],
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }
}
