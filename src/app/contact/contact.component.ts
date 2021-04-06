import { config } from './../../assets/config/config';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IContact } from '../resources/contact/contact.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contact: IContact = {
    firstname: '',
    lastname: '',
    email: '',
    subject: '',
    message: '',
  };

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  ngOnInit() {}

  sendContactForm() {
    this.http
      .post<IContact>(`${config.api.API_FULL_URL}/api/contact`, this.contact)
      .subscribe(
        (data) => this.toastr.success('Message envoyé'),
        (error) =>
          this.toastr.error("Erreur lors de l'envoie du formulaire de contact")
      );
  }
}
