import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Iservicios } from 'src/app/interfaces/iservicios';
import { Itriajece } from 'src/app/interfaces/itriajece';
import { ServiciosService } from 'src/app/services/servicios.service';
import { TriajeService } from 'src/app/services/triaje.service';
import { DatePipe } from '@angular/common';
import { Dialog } from '@angular/cdk/dialog';
import { TriarformComponent } from '../triarform/triarform.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-triajece-lista',
  templateUrl: './triajece-lista.component.html',
  styleUrls: ['./triajece-lista.component.css']
})
export class TriajeceListaComponent implements OnInit {
  triajedata: Itriajece[] = []
  serviciosdata: Iservicios[] = []
  triajeServices = inject(TriajeService)
  serviciosServices = inject(ServiciosService)

  fb = inject(FormBuilder)
  dialog=inject(Dialog)
  dialog2=inject(MatDialog)
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  datasource: any;
  ColumnasMostrar = ['idAtencion', 'ApellidoMaterno', 'ApellidoPaterno', 'PrimerNombre', 'Consultorio', 'TriajeFecha', 'Usuario','opciones'];


  form = this.fb.group({
    servicio: [''],
    fechaAtencion: ['']
  })

  constructor(private datePipe: DatePipe) { }
  ngOnInit(): void {
    this.serviciosServices.findServIdNomAll().subscribe(data => {
      this.serviciosdata = data
    })
    
  }

  onSubmit() {
    const fechaatencionce = this.datePipe.transform(this.form.value.fechaAtencion, 'yyyy-MM-dd');
    this.triajeServices.findTriajeFechaServicio(fechaatencionce).subscribe(data => {
      this.triajedata = data
      this.datasource = new MatTableDataSource<Itriajece>(this.triajedata);
      this.datasource.paginator = this.paginator
      this.datasource.sort = this.sort
    })
  }


  Triar(paciente:Itriajece) {
    const dialogo1 = this.dialog2.open(TriarformComponent, {
      data: paciente,
      width: '1200px',
    });

   
  }
 
}
