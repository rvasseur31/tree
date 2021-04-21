import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { config } from 'src/assets/config/config';
import { AccountService } from '../_services';
import { IDepot } from './depot.interface';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss'],
})
export class DepotComponent implements OnInit {
  myForm!: FormGroup;
  name!: FormControl;
  brand!: FormControl;
  year!: FormControl;
  state!: FormControl;
  type!: FormControl;

  constructor(
    private accountService: AccountService,
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.name = new FormControl('', Validators.required);
    this.brand = new FormControl('', Validators.required);
    this.year = new FormControl(new Date().getFullYear(), [Validators.required, Validators.max(new Date().getFullYear())]);
    this.state = new FormControl('', Validators.required);
    this.type = new FormControl('', Validators.required);
  }

  createForm() {
    this.myForm = new FormGroup({
      name: this.name,
      brand: this.brand,
      year: this.year,
      state: this.state,
      type: this.type,
    });
  }

  onSubmit(form: { value: IDepot }) {
    const user = this.accountService.userValue;
    console.log(form.value)
    const headers = new HttpHeaders({
      Authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsImlhdCI6MTYxNzcwNjQ5NCwiZXhwIjoxNjE3NzEwMDk0fQ.br3_gLkTo5-DQMJo0dKQJj-pHc0gI9axAXmtq7ikkzA',
    });
    this.http
      .post<IDepot>(
        `${config.api.API_FULL_URL}/api/device/add-device`,
        form.value,
        { headers }
      )
      .subscribe(
        (data) => this.toastr.success(`Merci ${user.firstName} pour votre don`),
        (error) => {
          console.log(error);
          return this.toastr.error("Erreur lors de l'envoie de votre don");
        }
      );
  }

  onReset(form: { reset: () => void }) {
    console.log('Reset !');
    form.reset();
  }
}
