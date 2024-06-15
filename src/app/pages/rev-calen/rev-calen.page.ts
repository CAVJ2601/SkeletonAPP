import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ApiclientService } from 'src/app/services/apiclient.service';
import { BottomSheetCalenComponent } from 'src/app/components/bottom-sheet-calen/bottom-sheet-calen.component';


@Component({
  selector: 'app-rev-calen',
  templateUrl: './rev-calen.page.html',
  styleUrls: ['./rev-calen.page.scss'],
})
export class RevCalenPage implements OnInit {

  constructor(private api:ApiclientService, private _bottomSheet: MatBottomSheet) { }

  openBottomSheet(): void{
    this._bottomSheet.open(BottomSheetCalenComponent);
  }
  ngOnInit() {
  }

}
