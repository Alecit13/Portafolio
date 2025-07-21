import {Component, OnInit} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
interface SkillCategory {
  category: string;
  skills: string[];
}
@Component({
  selector: 'app-skills',
  imports: [
    TranslatePipe
  ],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills implements OnInit{
  skills: SkillCategory[] = [];

  ngOnInit(): void {
    fetch('assets/data/skills.json')
      .then(res => res.json())
      .then(data => this.skills = data);
  }
}
