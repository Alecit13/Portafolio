import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {NgForOf} from '@angular/common';


interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  imports: [
    TranslatePipe,
    NgForOf
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects: Project[] = [];

  ngOnInit(): void {
    fetch('assets/data/projects.json')
      .then(res => res.json())
      .then(data => this.projects = data);
  }

}
