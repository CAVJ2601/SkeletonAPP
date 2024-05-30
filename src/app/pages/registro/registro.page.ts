import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],

})
export class RegistroPage implements OnInit {


  nombreUsuario: string = "";
  apellidoUsuario: string = "";
  nivelEducacion: string = "";  
   
  limpiarCeldas(){
    this.nombreUsuario='';
    this.apellidoUsuario='';
    this.nivelEducacion='';
    
  }


  ngOnInit() {
  }

}



