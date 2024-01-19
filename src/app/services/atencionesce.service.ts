import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iatencionesce } from '../interfaces/iatencionesce';

@Injectable({
  providedIn: 'root'
})
export class AtencionesceService {
  private apiURL=environment.apiURL+'atencionesce';
  private http=inject(HttpClient)
  public findCExFecha():Observable<Iatencionesce[]>{
    return this.http.get<Iatencionesce[]>(this.apiURL);
  }
}
