import { Component, Input, OnInit } from '@angular/core';
import { FaceSnapModel } from 'src/app/models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit {
  
  @Input()
  facesnapChild!: FaceSnapModel
  snaps!: number
  colorDesc!: string
  
  onClickSnaps = ():void => {
    this.snaps === 0 ? this.snaps = 1 : this.snaps = 0   
  }

  ngOnInit(): void {
    this.snaps = 0
    this.colorDesc = 'salmon'
  }
}
