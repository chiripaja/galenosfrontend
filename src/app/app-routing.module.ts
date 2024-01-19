import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RatencionesComponent } from './ce/ratenciones/ratenciones.component';
import { AdminComponent } from './layout/admin/admin.component';
import { TriajeceListaComponent } from './ce/triajece-lista/triajece-lista.component';
import { DiabetesComponent } from './reportes/diabetes/diabetes.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'atencionesce', component: RatencionesComponent },
      { path: 'triajece', component: TriajeceListaComponent },
      { path: 'diabetes', component: DiabetesComponent }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
