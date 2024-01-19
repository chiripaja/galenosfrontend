import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Iatencionesce } from 'src/app/interfaces/iatencionesce';
import { Iservicios } from 'src/app/interfaces/iservicios';
import { AtencionesceService } from 'src/app/services/atencionesce.service';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-ratenciones',
  templateUrl: './ratenciones.component.html',
  styleUrls: ['./ratenciones.component.css']
})
export class RatencionesComponent implements OnInit{
  serviciosdata:Iservicios[]=[]
  atencionCEdata:Iatencionesce[]=[]
  ColumnasMostrar = ['IdAtencion','ApellidoPaterno','ApellidoMaterno','PrimerNombre','NroHistoriaClinica','FechaNacimiento','FechaIngreso','Nombre','TriajeEdad'];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  datasource:any;  
  serviciosServices=inject(ServiciosService)
  atencionceServices=inject(AtencionesceService)
  
  ngOnInit(): void {
    this.serviciosServices.findServIdNomAll().subscribe(data=>{
      this.serviciosdata=data
    })
    this.atencionceServices.findCExFecha().subscribe(data=>{
      this.atencionCEdata=data;
      this.datasource=new MatTableDataSource<Iatencionesce>(this.atencionCEdata);
      this.datasource.paginator=this.paginator
      this.datasource.sort=this.sort
    }, error => console.error(error)); 
    }

}
