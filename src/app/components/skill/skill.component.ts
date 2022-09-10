import { Component, OnInit } from '@angular/core';
import { faPlus,faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  titulo : string = "Skills";
  faPlus = faPlus;
  faPen = faPen;
  constructor() { }

  ngOnInit(): void {
  }

}
