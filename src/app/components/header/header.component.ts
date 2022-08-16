import { Component, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  titulo : string = "Cristian Vera";
  faPen = faPen;
  
  constructor() { }
  ngOnInit(): void {
  }

}
