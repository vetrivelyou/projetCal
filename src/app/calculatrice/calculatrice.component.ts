import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent implements OnInit {
  textEcran ;
  nombre1=0;
  nombre2=0;
  operation="";
  constructor() { }

  ngOnInit() {
  }
  ecrireNombre(nombre:any){
    //alert(nombre.target.value);
    if(this.operation==""){
    this.nombre1+=nombre.target.value;
    this.textEcran= this.nombre1;
  }else{
    this.nombre2+=nombre.target.value;
    this.textEcran= this.nombre2;
  }}
 operations(oper:any){
   
  this.operation=oper.target.value;
  this.textEcran="";
 }
  calculer() {
    var result;
   if(this.operation==="+"){
     this.textEcran=parseFloat(this.nombre1)+parseFloat(this.nombre2);
     this.nombre1=result;
     this.nombre2=0;
     this.operation="";
    }
 }
}
