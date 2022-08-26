import { Component, OnInit } from '@angular/core';
import { faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { PortafolioService } from 'src/app/services/portafolio.service';

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
  miPortafolio:any;
  constructor(private datosPortafolio:PortafolioService ) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortafolio = data;
    });
  }

}
