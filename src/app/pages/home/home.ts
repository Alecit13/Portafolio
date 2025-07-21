import { Component } from '@angular/core';
import {Hero} from '../../shared/components/hero/hero';
import {Projects} from '../../shared/components/projects/projects';
import {Skills} from '../../shared/components/skills/skills';
import {About} from '../../shared/components/about/about';
import {Blog} from '../../shared/components/blog/blog';
import {Contact} from '../../shared/components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    Projects,
    Skills,
    About,
    Blog,
    Contact
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
