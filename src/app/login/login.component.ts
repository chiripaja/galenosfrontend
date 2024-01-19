import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  fb = inject(FormBuilder)

  form = this.fb.group({
    usuario: ['', Validators.required],
    password: ['', Validators.required]
  })

  obtenerErrorCampoNombre(camponom: string) {
    var campo = this.form.get(camponom)
    if (campo?.hasError('required')) {
      return 'El campo es requerido';
    }
    return ''
  }
  onSubmit(){

  }
}
