import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {

  showSuccess(message: string): void {
    console.log(`[SUCCESS]: ${message}`);
  }

  showError(message: string): void {
    console.error(`[ERROR]: ${message}`);
  }

  showInfo(message: string): void {
    console.info(`[INFO]: ${message}`);
  }
}