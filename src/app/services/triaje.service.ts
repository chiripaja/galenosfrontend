import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Itriajece } from '../interfaces/itriajece';

@Injectable({
  providedIn: 'root'
})
export class TriajeService {
  private apiURL=environment.apiURL+'triaje';
  private http=inject(HttpClient)

  public findTriajeAllFecha():Observable<Itriajece[]>{
    return this.http.get<Itriajece[]>(this.apiURL);
  }

  public findTriajeFechaServicio(fechaatencionce:any):Observable<Itriajece[]>{
    return this.http.get<Itriajece[]>(`${this.apiURL}/${fechaatencionce}`);
  }

}
