import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AccountService, AlertService } from '../_services';

@Component({
  selector: 'app-don',
  templateUrl: './don.component.html',
  styleUrls: ['./don.component.scss'],
})
export class DonComponent implements OnInit {
  donationForm!: FormGroup;
  cardHolder = new FormControl('', Validators.required);
  amount = new FormControl('', [Validators.required, Validators.min(1)]);
  creditCardNumber = new FormControl('', [
    Validators.required,
    // Validators.minLength(12),
    // CreditCardValidators.validateCCNumber,
  ]);
  creditCardCCV = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(4),
  ]);
  creditCardExpirationMonth = new FormControl('', Validators.required);
  creditCardExpirationYear = new FormControl('', Validators.required);

  myForm!: FormGroup;
  name!: FormControl;
  montant!: FormControl;
  numero1!: FormControl;
  numero2!: FormControl;
  numero3!: FormControl;
  numero4!: FormControl;
  ccv!: FormControl;
  exp_mois!: FormControl;
  exp_annee!: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private alertService: AlertService
    ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.donationForm = new FormGroup({
      cardHolder: this.cardHolder,
      amount: this.amount,
      creditCardNumber: this.creditCardNumber,
      creditCardCCV: this.creditCardCCV,
      creditCardExpirationMonth: this.creditCardExpirationMonth,
      creditCardExpirationYear: this.creditCardExpirationYear,
    });
  }

  onSubmit(form: { value: { [x: string]: any; }; }) {
    const name = form.value['name'];
    const montant = form.value['montant'];

    // GET USER INFO
    // .email .username .id
    const user = this.accountService.userValue;

    // POST_(name, montant, email, ...)
    alert("Merci pour votre don de " + montant + "€, Monsieur " + user.username);
  }

  onReset(form: { reset: () => void }) {
    form.reset();
  }
}
