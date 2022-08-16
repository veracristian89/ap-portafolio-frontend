import { Component, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { PortafolioService } from 'src/app/services/portafolio.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  titulo : string = "Cristian Vera";
  miPortafolio:any;
  faPen = faPen;
  
  constructor(private datosPortafolio:PortafolioService) { }
  
  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortafolio = data;
    });
  }

}
