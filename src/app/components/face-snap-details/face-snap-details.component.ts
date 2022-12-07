import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnapModel } from 'src/app/models/face-snap.model';
import { FaceSnapService } from 'src/app/services/face-snap.service';

@Component({
  selector: 'app-face-snap-details',
  templateUrl: './face-snap-details.component.html',
  styleUrls: ['./face-snap-details.component.scss']
})

export class FaceSnapDetailsComponent implements OnInit {
  facesnapChild!: FaceSnapModel
  colorDesc!: string
  buttonText!: string

  constructor(private faceSnapService: FaceSnapService, private activatedRoute: ActivatedRoute) {}
  
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
    const snapId = +this.activatedRoute.snapshot.params['id']
    this.facesnapChild = this.faceSnapService.getFacesnap(snapId)
  }
}
