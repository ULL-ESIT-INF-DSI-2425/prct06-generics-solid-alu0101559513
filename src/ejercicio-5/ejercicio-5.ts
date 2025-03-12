/**
 * Mejora del principio SOLID Dependency inversion principle
 */
interface Notify {
  notify(message: string): string;
}
export class EmailService implements Notify {
  notify(message: string): string {
    return `Sending notification by email: ${message}`;
  }
}
export class ShortMessageService  implements Notify{
  notify(message: string): string {
    return `Sending notification by SMS: ${message}`;
  }
}
export class Notifier {
  constructor(private notificationService: Notify) {
  }
  sendNotification(message: string): string {
    return this.notificationService.notify(message);
  }
}

