import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: any[];
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'U1: My Classroom', weight:['OA1', 'OA3', 'OA7'] , symbol: 'OFT3'},
  
];

@Component({
  selector: 'app-listado-plan',
  templateUrl: './listado-plan.page.html',
  styleUrls: ['./listado-plan.page.scss'],
})
export class ListadoPlanPage implements OnInit {

  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = ELEMENT_DATA;

  nomUniRecibido: string ="";
  oftRecibido: string = "";
  contRecibido: string ="";
  objApRecibido: any[] = [{name: ''}];

  constructor(private activerouter: ActivatedRoute, private router: Router) { 
    this.activerouter.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?. extras?.state){
        this.nomUniRecibido = this.router.getCurrentNavigation()?.extras?.state?.['nomUniEnviado'];
        this.oftRecibido = this.router.getCurrentNavigation()?.extras?.state?.['oftEnviado'];
        this.contRecibido = this.router.getCurrentNavigation()?.extras?.state?.['contEnviado'];
        this.objApRecibido = JSON.parse(this.router.getCurrentNavigation()?.extras?.state?.['objApEnviado']);
      }
    })
  }

  ngOnInit() {
  }

}
