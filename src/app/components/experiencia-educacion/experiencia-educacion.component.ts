import { Component, OnInit } from '@angular/core';
import { faPlus, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-experiencia-educacion',
  templateUrl: './experiencia-educacion.component.html',
  styleUrls: ['./experiencia-educacion.component.scss']
})
export class ExperienciaEducacionComponent implements OnInit {
  faPlus = faPlus;
  faTrash = faTrash;
  faPen = faPen;
  miPortafolio:any;
  constructor(private datosPortafolio:PortafolioService) { }
  
  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortafolio = data;
    });
  }

}
