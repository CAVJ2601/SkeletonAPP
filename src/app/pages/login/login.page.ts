import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private alertController: AlertController) {
    this.loginForm = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    });
  }

  async onLogin(){
    if (this.loginForm.valid){
      const { usuario, password } = this.loginForm.value;
      if (usuario === 'admin' && password === '123456'){
        this.router.navigate(['/home']);
      } else {
        const alert = await this.alertController.create ({
          header: 'Falló el login',
          message: 'Usuario o contraseña incorrecta.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    } else {
      const alert = await this.alertController.create({
        header: 'Validación incorrecta',
        message: 'Por favor ingrese una contraseña válida',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
  ngOnInit() {
  }

}
