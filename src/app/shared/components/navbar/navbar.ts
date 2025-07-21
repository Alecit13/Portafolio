import { Component } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [
    TranslatePipe
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  constructor(private translate: TranslateService) {}

  changeLang(event: Event) {
    const select = event.target as HTMLSelectElement;
    const lang = select?.value || 'en';
    this.translate.use(lang);
  }
}
