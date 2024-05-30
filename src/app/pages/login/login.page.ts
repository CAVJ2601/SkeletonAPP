import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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
    this.router.navigate(['/home'], navigationExtras)
  }

  ngOnInit() {
  }

}
