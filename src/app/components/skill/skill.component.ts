import { Component, OnInit } from '@angular/core';
import { faPlus,faPen } from '@fortawesome/free-solid-svg-icons';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  titulo : string = "Skills";
  faPlus = faPlus;
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
