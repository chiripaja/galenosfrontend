import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Iservicios} from '../interfaces/iservicios'
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private apiURL=environment.apiURL+'servicios';
  private http=inject(HttpClient)

  public findServIdNomAll():Observable<Iservicios[]>{
    return this.http.get<Iservicios[]>(this.apiURL);
  }
  
}
