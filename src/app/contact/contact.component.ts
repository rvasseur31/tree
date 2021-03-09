import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  firstName: string = "";
  lastName: string = "";
  email: string = "";
  subject: string = "";
  message: string = "";

  constructor() { }

  ngOnInit() {
  }

  sendContactForm(){
    console.log(this.firstName)
  }

}
