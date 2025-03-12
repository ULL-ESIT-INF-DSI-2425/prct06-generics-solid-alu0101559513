import { describe, expect, test, beforeEach } from "vitest";
import { Notifier, EmailService , ShortMessageService  } from "../src/ejercicio-5/ejercicio-5";

describe('Pruebas servicio de mensajería', () => {
  let emailNotifier;
  let shortMessageNotifier;

  beforeEach(() => {
    emailNotifier = new Notifier(new EmailService());
    shortMessageNotifier = new Notifier(new ShortMessageService());
  });

  test('Enviar notificación por correo', () => {
    const result = emailNotifier.sendNotification('Hello World!');
    expect(result).toBe('Sending notification by email: Hello World!');
  });

  test('Enviar notificiación por mensaje corto', () => {
    const result = shortMessageNotifier.sendNotification('Hello World!');
    expect(result).toBe('Sending notification by SMS: Hello World!');
  });
});