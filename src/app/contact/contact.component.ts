import { Component, OnInit } from '@angular/core';
import { IContact } from '../resources/contact/contact.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact: IContact = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  }

  constructor() { }

  ngOnInit() {
  }

  sendContactForm() {
    console.log(this.contact)
  }

}
