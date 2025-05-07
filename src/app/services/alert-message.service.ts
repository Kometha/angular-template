import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class AlertMessageService {
  constructor(private messageService: MessageService) {}

  private show(severity: string, summary: string, detail: string) {
    this.messageService.add({ severity, summary, detail });
  }

  success(detail: string) {
    this.show('success', '¡Hecho!', detail);
  }

  info(detail: string) {
    this.show('info', 'Información', detail);
  }

  warn(detail: string) {
    this.show('warn', 'Advertencia', detail);
  }

  error(detail: string) {
    this.show('error', 'Error', detail);
  }

  secondary(detail: string) {
    this.show('secondary', 'Mensaje', detail);
  }

  contrast(detail: string) {
    this.show('contrast', 'Mensaje especial', detail);
  }
}
