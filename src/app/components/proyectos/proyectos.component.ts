import { Component, OnInit } from '@angular/core';
import { faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  faTrash = faTrash;
  faPen = faPen;
  faPlus = faPlus;
  titulo : string = "Proyectos";
  constructor() { }

  ngOnInit(): void {
  }

}
