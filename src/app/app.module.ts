import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './utils/card/card.component';
import { RatencionesComponent } from './ce/ratenciones/ratenciones.component';
import { NavComponent } from './layout/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AdminComponent } from './layout/admin/admin.component';
import { TriajeceListaComponent } from './ce/triajece-lista/triajece-lista.component';
import { DatePipe, registerLocaleData } from '@angular/common';
import { TriarformComponent } from './ce/triarform/triarform.component';
import es from '@angular/common/locales/es';
import { DiabetesComponent } from './reportes/diabetes/diabetes.component'; 
registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardComponent,
    RatencionesComponent,
    NavComponent,
    AdminComponent,
    TriajeceListaComponent,
    TriarformComponent,
    DiabetesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [DatePipe,
  {provide:LOCALE_ID,useValue:'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
