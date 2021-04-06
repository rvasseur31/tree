import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication/authentication.service';
import { IUser } from '../user/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private authentificationService: AuthenticationService, private formBuilder: FormBuilder) { }

  user: IUser = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: ""
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(new RegExp("[0-9 ]{10}"))]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validator: this.MustMatch('password', 'confirmPassword')
    });
  }

  //convenience getter for east access to form fields
  get f() {
    return this.registerForm.controls;
  }


  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // Return if another validator had already found an error on the matchingControl
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ MustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  sendUserForm() {

    console.log(this.user)
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return ;
    }
    
    // display
    alert('Success !');
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
