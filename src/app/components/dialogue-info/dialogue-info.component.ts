import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/interface/dialog-data';

@Component({
  selector: 'app-dialogue-info',
  templateUrl: './dialogue-info.component.html',
  styleUrls: ['./dialogue-info.component.css'],
})
export class DialogueInfoComponent implements OnInit {
  constructor(
    public dialogInfo: MatDialogRef<DialogueInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  openWindow(e: any) {
    const path = e.srcElement.innerText.split(':');
    // console.log(e.srcElement.innerText.split(':'));
    window.open(`https:${path[1]}`, '_blank');

    // window.open(data.img)
  }

  ngOnInit(): void {}
}
