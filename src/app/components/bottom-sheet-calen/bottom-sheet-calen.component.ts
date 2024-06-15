import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet-calen',
  templateUrl: './bottom-sheet-calen.component.html',
  styleUrls: ['./bottom-sheet-calen.component.scss'],
})
export class BottomSheetCalenComponent  implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetCalenComponent>) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  ngOnInit() {}

}
