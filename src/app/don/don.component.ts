import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from  '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-don',
  templateUrl: './don.component.html',
  styleUrls: ['./don.component.scss']
})
export class DonComponent implements OnInit {

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.name = new FormControl('', Validators.required);
    this.numero1 = new FormControl('');
    this.numero2 = new FormControl('');
    this.numero3 = new FormControl('');
    this.numero4 = new FormControl('');
    this.ccv = new FormControl('',);
    this.exp_mois = new FormControl('01');
    this.exp_annee = new FormControl('01');
    this.montant = new FormControl('', Validators.required);
  }

  createForm() {
    this.myForm = new FormGroup({
      name: this.name,
      montant: this.montant,
      numero1: this.numero1,
      numero2: this.numero2,
      numero3: this.numero3,
      numero4: this.numero4,
      ccv: this.ccv,
      exp_mois: this.exp_mois,
      exp_annee: this.exp_annee
    });
  }

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const montant = form.value['montant'];
    alert("Merci pour votre don de " + montant + "€");
}

  onReset(form: NgForm) {
    console.log("Reset !");
    form.reset();
  }
}