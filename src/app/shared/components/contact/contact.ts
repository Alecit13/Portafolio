import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-contact',
  imports: [
    TranslatePipe, FontAwesomeModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  email = 'alejandrocuadroscontreras@email.com';

  copyEmail() {
    navigator.clipboard.writeText(this.email);
    alert('Email copied to clipboard!');
  }
}
