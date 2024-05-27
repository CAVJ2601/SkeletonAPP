import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  Usuario:string = "";
  Password:string = "";

  constructor(private router: Router) {

  }

  enviarDatos(){

    let navigationExtras: NavigationExtras = {
      state: {
        usuarioEnviado: this.Usuario,
        passwordEnviada: this.Password
      }
    }
    this.router.navigate(['/registro'], navigationExtras)
  }

  ngOnInit(){

  }

}
