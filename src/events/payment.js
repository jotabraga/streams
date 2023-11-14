export default class Payment {
    constructor(subject) {
        this.paymentSubject = this.paymentSubject
    }

    creditCard(paymentData) {
        console.log(`\nA payment ocurred from ${paymentData.description}`)
        this.paymentSubject.notify(paymentData)
    }
}