import { expect, describe, test, jest } from '@jest/globals';
import Payment from '../src/events/payment.js';
import Marketing from '../src/observers/marketing.js';
import Shipment from '../src/observers/shipment.js';
import PaymentSubject from '../src/subjects/paymentSubject';

describe('Test suite for observer pattern', () => {

    test("#PaymentSubject notify observers", () => {
      const subject = new PaymentSubject();
      const observer = {
        update: jest.fn()
      }
      console.log('sub first', subject.notify('hii'))
      const data = 'hello world';
      const expected = data;
      subject.subscribe(observer);
      subject.unsubscribe(observer)
      subject.notify(data)
      expect(observer.update).not.toHaveBeenCalled();
    });
    test("#PaymentSubject not notify unsubscribed observers", () => {
      const subject = new PaymentSubject();
      console.log('sub here', subject);
      const payment = new Payment(subject);

      const paymentSubjectNotifierSpy = jest.spyOn(subject, subject.notify.name);
      const data = { userName: 'jota', id: 3};
      payment.creditCard(data)

      expect(paymentSubjectNotifierSpy).toBeCalledWith(data);
    });
    test("#Payment should notify notify observers", () => {
      const subject = new PaymentSubject();
      const shipment = new Shipment();
      const marketing = new Marketing();

      const shipmentSpy = jest.spyOn(shipment, shipment.update.name);
      const marketingSpy = jest.spyOn(marketing, marketing.update.name);

      subject.subscribe(shipment);
      subject.subscribe(marketing);

      const payment = new Payment(subject);
      const data = { id: 4, userName: 'silvia'}
      payment.creditCard(data);

      expect(shipment).toBeCalledWith(data);
    });
    test.todo("#PaymentSubject notify observers");
})