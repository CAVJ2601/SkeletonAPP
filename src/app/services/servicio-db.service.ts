import { Platform } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioDBService {

  public db!: SQLiteObject;

  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private platform: Platform, private toastController: ToastController, private alertController: AlertController) {
    this.initDatabase();
  }

  private initDatabase(){
    this.sqlite.create({
      name: 'claudb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.db = db;
      this.isDBReady.next(true);
      this.crearUsuario();

    }).catch(error => this.presentToast('Error al insertar usuario: ' + error)); 
      
    }

    private crearUsuario(){
      this.db.executeSql(
        `CREATE TABLE IF NOT EXISTS usuarios (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre TEXT,
          apellido TEXT,
          usuario TEXT,
          password TEXT,
          tipo_pedagogia TEXT,
          email TEXT,
          )`, [])
          .then(() => this.presentToast('Tabla creada'))
          .catch(error => this.presentToast('Error creando tabla: '+ error));
    }

    insertarUsuario(nombreUsuario: string, apellidoUsuario: string, nickname: string, password: string, tipoPedagogia: string, email: string){
      return this.db.executeSql(`
        INSERT INTO usuarios (nombre, apellido, usuario, password, tipo_pedagogia, email) VALUES (?, ?, ?, ?, ?, ?);`,
        [nombreUsuario, apellidoUsuario, nickname, password, tipoPedagogia, email])
        .then (() => this.presentToast('Usuario creado correctamente'))
        .catch(error => this.presentToast('Error al insertar usuario: ' + error));
    }

    private async presentToast(message: string){
      const toast = await this.toastController.create({
        message: message,
        duration: 2000,
      });
      toast.present();
      }
     
      getIsDBReady(){
        return this.isDBReady.asObservable();
      }

      
    }

  
