import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experiencia-educacion',
  templateUrl: './experiencia-educacion.component.html',
  styleUrls: ['./experiencia-educacion.component.scss']
})
export class ExperienciaEducacionComponent implements OnInit {
  faPlus = faPlus;
  constructor() { }

  ngOnInit(): void {
  }

}
