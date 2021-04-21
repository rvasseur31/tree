import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { config } from 'src/assets/config/config';
import { AccountService, AlertService } from '../_services';
import { IDon } from './don.interface';

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
    private alertService: AlertService,
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

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

  onSubmit(form: { value: IDon }) {
    const amount = form.value.amount;
    const user = this.accountService.userValue;
    const headers = new HttpHeaders({
      Authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYxNzcwNjQ5NCwiZXhwIjoxNjE3NzEwMDk0fQ.br3_gLkTo5-DQMJo0dKQJj-pHc0gI9axAXmtq7ikkzA',
    });
    this.http
      .post<IDon>(`${config.api.API_FULL_URL}/api/donation`, form.value, {headers})
      .subscribe(
        (data) =>
          this.toastr.success(`Merci ` + user.firstName + ` pour votre don de ${amount} €`),
        (error) => {
          console.log(error)
          return this.toastr.error("Erreur lors de l'envoie de votre don");
        }
      );
  }

  onReset(form: { reset: () => void }) {
    form.reset();
  }
}
