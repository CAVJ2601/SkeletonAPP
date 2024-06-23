import { Component, OnInit, Sanitizer } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServicioDBService } from 'src/app/services/servicio-db.service';

import { Camera, CameraResultType } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],

})
export class RegistroPage implements OnInit {


  nombreUsuario: string = "";
  apellidoUsuario: string = "";
  nickname: string = "";
  password: string = "";
  tipoPedagogia: string = "";
  email: string = "";
  
  /* isDBReady: boolean = false; */ 
   
  limpiarCeldas(){
    this.nombreUsuario='';
    this.apellidoUsuario='';
    this.nickname='';
    this.password='';
    this.tipoPedagogia='';
    this.email='';
    
  }

  public photo: SafeResourceUrl | undefined;

  constructor(private alertController: AlertController, private sanitizer: DomSanitizer) {}

  async takePicture(){
    try {
      const capturedPhoto = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });

      this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(capturedPhoto.webPath!);
    } catch(error){
      console.error('Error al tomar la foto: ', error);
    }
  }
  
  /* agregar a constructor  private dbService: ServicioDBService  para agregar la base de datos*/
  /*async presentAlert(message: string){
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }  


  guardarDatos() {
    this.dbService.insertarUsuario(this.nombreUsuario, this.apellidoUsuario, this.nickname, this.password, this.tipoPedagogia, this.email)
    .then (() => {
      this.presentAlert('Datos guardados exitosamente');
    })
    .catch(error => {
      this.presentAlert('Error al guardar datos: ' + error);
    });
  }

  */

  

  ngOnInit() {
    /*this.dbService.getIsDBReady().subscribe(isReady => {
      this.isDBReady = isReady;
      if (isReady) {

      }
    });*/
  }


}



