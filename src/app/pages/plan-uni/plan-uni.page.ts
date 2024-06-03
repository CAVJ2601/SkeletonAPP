import { Component, OnInit, inject } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipEditedEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-plan-uni',
  templateUrl: './plan-uni.page.html',
  styleUrls: ['./plan-uni.page.scss'],
})

export class PlanUniPage implements OnInit {

  nombreUnidad: string = "";
  OFT: string = "";
  Contenido: string = "";

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  objAp: any[] = [{name: 'OA1'}, {name: 'OA5'}];

  announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.objAp.push({name: value});
    }

    event.chipInput!.clear();
  }

  remove(oA: any): void {
    const index = this.objAp.indexOf(oA);

    if (index >= 0) {
      this.objAp.splice(index, 1);

      this.announcer.announce(`Removed ${oA}`);
    }
  }

  edit(oA: any, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(oA);
      return;
    }

    const index = this.objAp.indexOf(oA);
    if (index >= 0) {
      this.objAp[index].name = value;
    }
  }

  limpiarCeldas(){
    this.nombreUnidad='';
    this.OFT='';
    this.objAp.length= 0;
    this.Contenido='';
    
  }

  constructor(private router: Router) { }
  ngOnInit() {
  }

  enviarDatos(){
    let navigationExtras: NavigationExtras = {
      state: {
        nomUniEnviado: this.nombreUnidad,
        oftEnviado: this.OFT,
        contEnviado: this.Contenido,
        objApEnviado: JSON.stringify(this.objAp),

      }
    }
  
    this.router.navigate(['/listado-plan'], navigationExtras);
  }



}
