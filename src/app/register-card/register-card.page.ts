import { Component, OnInit } from '@angular/core';

//import { PayPal, PayPalPayment, PayPalConfiguration, PayPalPaymentDetails } from '@ionic-native/paypal'
import { PayPal, PayPalPayment, PayPalConfiguration, PayPalPaymentDetails } from '@ionic-native/paypal/ngx';


@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.page.html',
  styleUrls: ['./register-card.page.scss'],
})
export class RegisterCardPage implements OnInit {

  constructor(private payPal: PayPal) { }

  ngOnInit() {
  }

  pagamento() {
    this.payPal.init({
      PayPalEnvironmentProduction: '',
      PayPalEnvironmentSandbox: 'AX7psZ2FtMO0ZwsWBq5Fk_CVfI9NeeccYtz-mLWE9iqhGJTMw9qQ6gB-jXDF-Qr8aBElbtSwq00bCoS8',
    }).then(() => {
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        acceptCreditCards: true,
        languageOrLocale: 'pt-BR',
        merchantName: 'AppEssenfelder',
        merchantPrivacyPolicyURL: '',
        merchantUserAgreementURL: ''
      })).then(() => {
        let detail = new PayPalPaymentDetails('30.00', '0.00', '0.00');
        let payment = new PayPalPayment('30.00', 'BRL', 'AppEssenfelder', 'Sale', detail);
        this.payPal.renderSinglePaymentUI(payment).then((response) => {
          console.log('pagamento efetuado');
        }, () => {
          console.log('erro na renderização');
        })
      })
    })
  }

}
