import {Component, HostListener} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    TranslatePipe,
    NgClass
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  isFloating = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isFloating = window.scrollY > 100; // se activa al hacer scroll 100px
  }


}
