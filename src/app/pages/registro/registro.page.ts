import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],

})
export class RegistroPage implements OnInit {


  nombreUsuario: string = "";
  apellidoUsuario: string = "";
  nickname: string = "";
  tipoPedagogia: string = "";
  email: string = "";  
   
  limpiarCeldas(){
    this.nombreUsuario='';
    this.apellidoUsuario='';
    this.nickname='';
    this.tipoPedagogia='';
    this.email='';
    
  }

  constructor(private alertController: AlertController) {}
  
  async showPopup() {
    const alert = await this.alertController.create({
      header: 'Datos ingresados',
      message: `
        Apellido: ${this.apellidoUsuario}
        Nombre: ${this.nombreUsuario}
        Usuario: ${this.nickname}
        Carrera: ${this.tipoPedagogia}
        E-mail: ${this.email}
      `,
      buttons: ['OK']
    });

    await alert.present();
  }
  ngOnInit() {
  }

}



