export default class Payment {
    constructor(subject) {
        this.paymentSubject = this.paymentSubject
    }

    creditCard({id, userName, age}) {
        console.log(`\nA payment ocurred from ${userName}`)
        this.paymentSubject.notify({id, userName})
    }
}