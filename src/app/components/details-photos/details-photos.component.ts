import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogueInfoComponent } from '../../components/dialogue-info/dialogue-info.component';
import { Picsum } from '../../interface/picsum';

import { PicsumService } from '../../api/picsum.service';

@Component({
  selector: 'app-details-photos',
  templateUrl: './details-photos.component.html',
  styleUrls: ['./details-photos.component.css'],
})
export class DetailsPhotosComponent implements OnInit {
  images!: Picsum[];
  numberGetPhothos: number = 1;

  numberId: string = '';
  nameAutor: string = '';
  pathImagem: string = '';

  constructor(private picsum: PicsumService, public dialog: MatDialog) {}

  backTop() {
    document.getElementById('headTitle')?.scrollIntoView();
  }

  previousPages() {
    this.numberGetPhothos--;
    this.photos();
    this.backTop();
  }
  NextPages() {
    this.numberGetPhothos++;
    this.backTop();
    this.photos();
  }

  photos() {
    this.picsum.getPhotos(this.numberGetPhothos).subscribe((data) => {
      this.images = data;
      console.log(this.numberGetPhothos);

      //console.log(this.images);
      //console.log(data);
    });
  }

  informationImg(event: any) {
    this.numberId = event.target.previousSibling.id;
    this.nameAutor = event.target.previousSibling.alt;
    this.pathImagem = event.target.previousSibling.src;
    console.log(event.target.previousSibling.src);
    const dialogInfo = this.dialog.open(DialogueInfoComponent, {
      data: { id: this.numberId, author: this.nameAutor, img: this.pathImagem },
    });
  }

  ngOnInit(): void {
    this.photos();
  }
}
