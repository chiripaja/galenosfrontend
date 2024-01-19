import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Iapidiabetes } from 'src/app/interfaces/iapidiabetes';
import { Ienviosdiabetes } from 'src/app/interfaces/ienviosdiabetes';
import { ApidiabetesService } from 'src/app/services/apidiabetes.service';
import { AlertsuccesService } from 'src/app/services/alertsucces.service';

@Component({
  selector: 'app-diabetes',
  templateUrl: './diabetes.component.html',
  styleUrls: ['./diabetes.component.css']
})
export class DiabetesComponent implements OnInit {
  codigorespuesta=""
  enviodiabetes?:Ienviosdiabetes
  apidiabetesdata: Iapidiabetes[] = []
  enviodataapidiabetes?:Iapidiabetes
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ColumnasMostrar = ['IdAtencion','codigo_respuesta' ,'enviarData'];
  datasource: any;
  ngOnInit(): void {
    this.cargardatos();    
    this.apidiabatesservices.autenticado().subscribe(data=>
      {
        data ? "" : this.apidiabatesservices.creacionToken().subscribe(data=>{data.access_token ?  localStorage.setItem("llavetoken", data.access_token):'';})
      }
      )
  }
  cargardatos(){
    this.apidiabatesservices.findApiDiabetesFecha().subscribe(data => {   
      console.log(data)   
      this.apidiabetesdata = data
      this.datasource = new MatTableDataSource<Iapidiabetes>(this.apidiabetesdata);
      this.datasource.paginator = this.paginator
      this.datasource.sort = this.sort
    })
  }

  fb = inject(FormBuilder)
  alertsuccessservices=inject(AlertsuccesService)
  apidiabatesservices = inject(ApidiabetesService)
  form = this.fb.group({
    fechaini: ['', Validators.required],
    fechafin: ['', Validators.required]
  })


  GuardarCambios() {
    console.log(this.form.value)
  }

  EnviarUnidad(id: number) {
    this.apidiabatesservices.findApiDiabetesById(id).subscribe(
      (data:any)=>{
        this.enviodataapidiabetes={
          eess:"00000754",
          histcli:data[0].histcli?data[0].histcli : "",
          apepat:data[0].apepat?data[0].apepat : "",
          apemat:data[0].apemat?data[0].apemat : "",
          nombres:data[0].apemat?data[0].nombres : "",
          sexo:data[0].apemat?data[0].sexo : "",
          fecha_nac:data[0].fecha_nac?data[0].fecha_nac : "",
          edad:data[0].edad?data[0].edad : "",
          instruccion:data[0].instruccion?data[0].instruccion : "",
          tipodoc:data[0].tipodoc?data[0].tipodoc : "",
          dni:data[0].dni?data[0].dni : "",
          ubigeo_res:data[0].ubigeo_res?data[0].ubigeo_res : "",
          direccion:data[0].direccion?data[0].direccion : "",
          telefono:"999888555",
          celular:"999888555",
          asegurado:"",
          tseguro:"",
          otroseguro:"",
          fecha_cap:data[0].fecha_cap?data[0].fecha_cap : "",
          tcaso:data[0].tcaso?data[0].tcaso : "",
          tmpenf1:"",
          tmpenf2:"",
          tdiabetes:data[0].tdiabetes?data[0].tdiabetes : "",
          otrodiab:"",
          peso:data[0].peso?data[0].peso : "",
          talla:data[0].talla?data[0].talla : "",
          imc:data[0].imc?data[0].imc : "",
          pcint:"",
          sistolica:data[0].sistolica?data[0].sistolica : "",
          diastolica:data[0].diastolica?data[0].diastolica : "",
          glicemia:data[0].glicemia?data[0].glicemia : "",
          postpandrial:"", 
          tolerancia:"",
          hemoglic:"",
          microalbu:"",
          ldl:"",
          creatinina:"",
          proteinuria:"",
          col_total:"",
          trigliceridos:"",
          hdl:"",
          status:"",
          consultas:"",
          hospitalizaciones:"",
          evaluado:data[0].evaluado?data[0].evaluado : "",
          neuropatia:"",
          noproliferativa:"",
          proliferativa:"",
          sinamputacion:"",
          conamputacion:"",
          enfisquemica:"",
          enfcerebrovascular:"",
          enfarterial:"",
          hipoglicemia:"",
          nefropatia:"",
          hta:"",
          obesidad:"",
          displidemia:"",
          anemia:"",
          higado:"",
          etiroidea:"",
          cancer:"",
          otrocancer:"",
          tabaquismo:"",
          tbc:"",
          otros:"",
          otracomorbilidad:"",
          tiempo:"",
          tiempo2:"",
          tratamiento:"",
          metformina:"",
          sulfolinurea:"",
          inhibidores:"",
          insulinanph:"",
          insulinaa:"",
          glitazonas:"",
          glifozinas:"",
          agonistas:"",
          otrotratamiento:"",
          cumplimiento:"",
          educacion:"",
          medico:"",
          cmp:"",
          edad_diagno:"",
          lyspro:"",
          glulisina:"",
          aspart:"",
          deglude:"",
          glargina100:"",
          glargina300:""
        }
  
        this.apidiabatesservices.RegistrarCdcApi(this.enviodataapidiabetes).subscribe((data:any)=>{
          this.codigorespuesta=data.codigo_respuesta
          this.apidiabatesservices.findApiDiabetesById(id).subscribe(
            (datos) => {       
              this.enviodiabetes={
                codigo_respuesta:this.codigorespuesta,
                cuentaid:id.toString()
              }
              this.apidiabatesservices.CreateIngresoApi(this.enviodiabetes).subscribe(data=>{
                console.log(data)
                this.alertsuccessservices.mostrarAlerta('Éxito', 'La operación se completó correctamente', 'success')
                this.cargardatos()
              },(error)=>{
                console.log(error)
                this.alertsuccessservices.mostrarAlerta('No se puede registrar', error, 'error')           
              })     
            },
            (error) => {
              console.error('Error al obtener datos:', error);
            }
          )
        },
        (error) => {
          let resultado = "";

          console.error('Error al obtener datos:', error.error.mensaje);
          for (const clave in error.error.mensaje) {
            if (error.error.mensaje.hasOwnProperty(clave)) {
              const valor = error.error.mensaje[clave];
              resultado += `<b>${clave}</b>: ${valor}<br>`;
            }
          }
          this.alertsuccessservices.mostrarAlerta('No se puede registrar', resultado, 'error')     
        })
       
      }
    )
    
   
  }
}
