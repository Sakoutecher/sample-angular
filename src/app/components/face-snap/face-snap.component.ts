import { Component, Input, OnInit } from '@angular/core';
import { FaceSnapModel } from 'src/app/models/face-snap.model';
import { FaceSnapService } from 'src/app/services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit {
  
  @Input()
  facesnapChild!: FaceSnapModel
  colorDesc!: string
  buttonText!: string

  constructor(private faceSnapService: FaceSnapService) {

  }
  
  onClickSnaps = ():void => {
    if (this.buttonText === 'zeroSnap') {
      this.buttonText = 'oneSnap'
      this.faceSnapService.addOrdownFaceSnapById(this.facesnapChild.id)
    } else {
      this.buttonText = 'zeroSnap'
      this.faceSnapService.addOrdownFaceSnapById(this.facesnapChild.id)
    }  
  }

  ngOnInit(): void {
    this.colorDesc = 'salmon'
    this.buttonText = 'zeroSnap'
  }
}
