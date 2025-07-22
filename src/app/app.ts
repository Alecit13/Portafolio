import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './shared/components/navbar/navbar';
import {TranslateService} from '@ngx-translate/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, FaIconComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portafolio');
  constructor(private translate: TranslateService) {}
  isDark = false;

  toggleTheme() {
    this.isDark = !this.isDark;
    const html = document.documentElement;
    html.classList.toggle("dark", this.isDark);
    localStorage.setItem("theme", this.isDark ? 'dark' : 'light');
  }

  changeLang(event: Event) {
    const select = event.target as HTMLSelectElement;
    const lang = select?.value || 'en';
    this.translate.use(lang);
  }

  protected readonly faSun = faSun;
  protected readonly faMoon = faMoon;
}
