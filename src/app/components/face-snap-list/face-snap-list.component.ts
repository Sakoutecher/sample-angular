import { Component } from '@angular/core';
import { FaceSnapModel } from 'src/app/models/face-snap.model';
import { FaceSnapService } from 'src/app/services/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent {
  facesnap!: FaceSnapModel[]

  constructor(private faceSnapService: FaceSnapService) {}
  ngOnInit(): void {
    this.facesnap = this.faceSnapService.getAllFacesnap()
  }
}
