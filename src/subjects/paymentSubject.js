export default class PaymentSubject {
    #observers = new Set() //set for not repeated 

    notify(data) {
        this.#observers.forEach(observer => observer.update(data))
    }

    unsubscribe(observable) {
        this.#observers.delete(observable)
    }

    subscribe(observable) {
        this.#observers.add(observable);
    }
}