import { Component, OnInit } from '@angular/core';
import { FaceSnapModel } from 'src/app/models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit {
  snaps!: number
  facesnap!: FaceSnapModel

  onClickSnaps = ():void => {
    if (this.snaps === 0) {
      this.snaps++
    } else {
      this.snaps--
    }
  }

  ngOnInit(): void {
    /*
    this.title = "Paris"
    this.description = "Visiter Paris !"
    this.createDate = new Date()
    this.imgUrl = 'https://imgs.search.brave.com/8zsOTLfOSWsEC-eyQYmpZpcb-R57gCL9HTmNSUa2fh4/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/cTZQMDBJTDZtZWtJ/d2pIbEtmSl9BSGFF/OCZwaWQ9QXBp'
    */
    this.snaps = 0
  }
}
