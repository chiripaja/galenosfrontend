import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iapidiabetes } from '../interfaces/iapidiabetes';
import { Ienviosdiabetes } from '../interfaces/ienviosdiabetes';
import { Iauthcdc } from '../interfaces/iauthcdc';


@Injectable({
  providedIn: 'root'
})
export class ApidiabetesService {
  
  
  private readonly llavetoken='llavetoken' ;
  private apiURL=environment.apiURL+'apidiabetes';  
  private http=inject(HttpClient)

  public findApiDiabetesFecha():Observable<Iapidiabetes[]>{
    return this.http.get<Iapidiabetes[]>(this.apiURL);
  }

  public findApiDiabetesById(id:number):Observable<Iapidiabetes>{
    return this.http.get<Iapidiabetes>(`${this.apiURL}/${id}`);
  }

  public RegistrarCdcApi(enviodiabetes:any){
    const token = localStorage.getItem(this.llavetoken);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    const objetoFinal = {
      data: [enviodiabetes]
    };
    return this.http.post(`https://testapidiabetes.dge.gob.pe/registrar`,objetoFinal, { headers })
  }

  
  CreateIngresoApi(enviosdiabetes:Ienviosdiabetes){    
    
    return this.http.post(`${this.apiURL}/create`,enviosdiabetes)
  }

  autenticado():Observable<Boolean>{
    const token=localStorage.getItem(this.llavetoken);
    if (!token){
      return of(false)
    }
    var parts = token?.split('.');
    if (parts){
      let decodedPayload = atob(parts[1]);
      let payloadObject = JSON.parse(decodedPayload);
      let expiracionfecha = new Date(payloadObject.exp*1000)
      if(expiracionfecha<=new Date()){      
        return of(false);
      }
    }  
    return of(true);
  }

  public creacionToken():Observable<Iauthcdc>{
    let data:any={
      client_id : "1107364df3c88b78139ed635edf94cc3",
      client_secret:"265d2064881f4a19cc6b37713b3205f174fc0b526b44322b14b332014001dcad",
      grant_type: "client_credentials"      
    }    
    return this.http.post<Iauthcdc>('https://testservoauth.dge.gob.pe/auth',data);
  }

 

  
}
