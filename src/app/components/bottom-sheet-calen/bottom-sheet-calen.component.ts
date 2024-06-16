import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ApiclientService } from 'src/app/services/apiclient.service';

interface Festivo {
  date: string;
  title: string;
  extra: string;
}

@Component({
  selector: 'app-bottom-sheet-calen',
  templateUrl: './bottom-sheet-calen.component.html',
  styleUrls: ['./bottom-sheet-calen.component.scss'],
})
export class BottomSheetCalenComponent  implements OnInit {

  festivos: Festivo[] = [];

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetCalenComponent>, private apiclientservice: ApiclientService) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  ngOnInit(): void {
    this.apiclientservice.getFestivos().subscribe(response => {
      const startDate = new Date('2024-03-01');
      const endDate = new Date('2024-12-31');

    this.festivos = response.data.filter((festivo: Festivo) => {
      const festivoDate = new Date(festivo.date);
      return festivoDate >= startDate && festivoDate <= endDate; 
    })
    });
  }
  }

