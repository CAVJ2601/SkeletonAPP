import { Component, OnInit, inject } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipEditedEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan-clase',
  templateUrl: './plan-clase.page.html',
  styleUrls: ['./plan-clase.page.scss'],
})
export class PlanClasePage implements OnInit {

  nombreUnidad: string = "";
  objClase: string = "";
  Desarrollo: string = "";

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
    this.objClase='';
    this.objAp.length= 0;
    this.Desarrollo='';
    
  }

  constructor(private router: Router) { }
  ngOnInit() {
  }

  enviarDatos(){
    localStorage.setItem('nomUni', this.nombreUnidad);
    localStorage.setItem('objClase', this.objClase);
    localStorage.setItem('objAp', JSON.stringify(this.objAp));
    localStorage.setItem('Desa', this.Desarrollo)
  }

}
