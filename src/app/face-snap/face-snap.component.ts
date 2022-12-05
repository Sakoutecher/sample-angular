import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit {
  title!: string
  description!: string
  createDate!: Date
  snaps!: number
  imgUrl!: string

  onClickSnaps = ():void => {
    if (this.snaps === 0) {
      this.snaps++
    } else {
      this.snaps--
    }
  }

  ngOnInit(): void {
    this.title = "Paris"
    this.description = "Visiter Paris !"
    this.createDate = new Date()
    this.snaps = 0
    this.imgUrl = 'https://imgs.search.brave.com/8zsOTLfOSWsEC-eyQYmpZpcb-R57gCL9HTmNSUa2fh4/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/cTZQMDBJTDZtZWtJ/d2pIbEtmSl9BSGFF/OCZwaWQ9QXBp'
  }
}
