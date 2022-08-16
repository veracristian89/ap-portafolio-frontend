import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  constructor(private http:HttpClient) {

  }

  obtenerDatos():Observable<any>{
    return this.http.get('./assets/data/db.json')
  }
  
}
