import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from  '@angular/forms';
import { Validators } from '@angular/forms';
import { AccountService } from '../_services';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {

  myForm!: FormGroup;
  name!: FormControl;
  brand!: FormControl;
  date!: FormControl;
  state!: FormControl;

  constructor(private formBuilder: FormBuilder, private accountService: AccountService) { }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.name = new FormControl('', Validators.required);
    this.brand = new FormControl('', Validators.required);
    this.date = new FormControl('', Validators.required);
    this.state = new FormControl('', Validators.required);
  }

  createForm() {
    this.myForm = new FormGroup({
      name: this.name,
      brand: this.brand,
      date: this.date,
      state: this.state
    });
  }

  onSubmit(form: { value: { [x: string]: any; }; }) {
    const name = form.value['name'];
    const brand = form.value['brand'];
    const date = form.value['date'];
    const state = form.value['state'];
    const user = this.accountService.userValue;
    console.log(name, brand, date, state, user);
  }

  onReset(form: { reset: () => void; }) {
    console.log("Reset !");
    form.reset();
  }
  
}
