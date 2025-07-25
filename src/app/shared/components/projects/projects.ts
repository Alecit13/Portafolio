import {Component, OnInit} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {NgClass} from '@angular/common';


interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  type:string;
  link: string;
  impact: string;
}

@Component({
  selector: 'app-projects',
  imports: [
    TranslatePipe,
    NgClass
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit{
  projects: Project[] = [];
  experienceItems: any[] = [];

  ngOnInit(): void {
    fetch('assets/data/projects.json')
      .then(res => res.json())
      .then(data => this.projects = data);

    this.translateService.get('experience.items').subscribe((items) => {
      this.experienceItems = items;
    });
  }

  constructor(private translateService: TranslateService) {}
}
