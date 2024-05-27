import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],

})
export class RegistroPage implements OnInit {

  usuarioRecibido: string ="";
  passwordRecibido: string ="";
  constructor(private activerouter: ActivatedRoute, private router: Router) {
    this.activerouter.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras?.state){
        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['usuarioEnviado'];
        this.passwordRecibido = this.router.getCurrentNavigation()?.extras?.state?.['passwordEnviada'];

      }
    })
   } 

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



