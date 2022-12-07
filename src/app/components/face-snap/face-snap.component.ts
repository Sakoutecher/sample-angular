import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private faceSnapService: FaceSnapService, private router: Router) {}

  onContinue() {
    const snapId = this.facesnapChild.id
    this.router.navigateByUrl('facesnaps/' + snapId)
  }
  
  ngOnInit(): void {
    this.colorDesc = 'salmon'
  }
}
