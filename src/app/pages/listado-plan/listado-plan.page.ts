import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'U1: My Classroom', weight: 'OA1, OA3, OA7', symbol: 'OFT3'},
  {position: 2, name: 'Unidad 2', weight: 'OA2, OA16', symbol: 'OFT1, OFT2'},
  {position: 3, name: 'Unidad 3', weight: 'OA3, OA8, OA9', symbol: 'OFT3'},
  {position: 4, name: 'Unidad 4', weight: 'OA7, OA15', symbol: 'OFT1, OFT4'},
  {position: 5, name: 'Unidad 5', weight: 'OA4, OA8', symbol: 'OFT2'},
  
];

@Component({
  selector: 'app-listado-plan',
  templateUrl: './listado-plan.page.html',
  styleUrls: ['./listado-plan.page.scss'],
})
export class ListadoPlanPage implements OnInit {

  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
