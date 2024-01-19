import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AlertsuccesService {
  mostrarAlerta(titulo: string, mensaje: string, tipo: 'success' | 'error' | 'warning' | 'info' = 'success'): void {
    Swal.fire({
      title: titulo,
      html: mensaje,
      icon: tipo,
      confirmButtonText: 'OK'
    });
  }
}
