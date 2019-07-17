import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { User } from '../shared/user';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  user = {name: '', email: '', subject: '', message: ''};
  submitted = false;

  constructor(private _email: EmailService) { }

  ngOnInit() { }

  onSubmit() {
    this.submitted = true;
    this._email.email(this.user).subscribe(
      data => console.log('Success', data),
      error => console.log('Error', error)
    );
  }

}
