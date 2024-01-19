import {Component, Inject, OnInit} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Itriajece } from 'src/app/interfaces/itriajece';
@Component({
  selector: 'app-triarform',
  templateUrl: './triarform.component.html',
  styleUrls: ['./triarform.component.css']
  
})
export class TriarformComponent implements OnInit{
  dato:any=""
  constructor(
    public dialogRef: MatDialogRef<TriarformComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Itriajece
  ) {}
  ngOnInit(): void {
    this.dato=this.data
  }
}
