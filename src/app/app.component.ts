import { Component, OnInit } from '@angular/core';
import { FaceSnapModel } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'first-angular-app';
  facesnap1!: FaceSnapModel
  facesnap2!: FaceSnapModel
  facesnap3!: FaceSnapModel

  ngOnInit(): void {
    this.facesnap1 = {
      title: "Paris",
      description: "Visiter Paris !",
      createDate: new Date(),
      imgUrl: 'https://imgs.search.brave.com/8zsOTLfOSWsEC-eyQYmpZpcb-R57gCL9HTmNSUa2fh4/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/cTZQMDBJTDZtZWtJ/d2pIbEtmSl9BSGFF/OCZwaWQ9QXBp',
      location: '',
    }
    this.facesnap2 = {
      title: "Niort",
      description: "Visiter Niort !",
      createDate: new Date(),
      imgUrl: 'https://imgs.search.brave.com/knUPIwylkzkkQwrlHrNrmaHJPwQ3_J-Hkl6Kb9CuepE/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uy/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5RYm1DYWxj/YUdXb0lOcmxIcWRD/aGFnSGFGaiZwaWQ9/QXBp',
      location: 'Niort',
    }
    this.facesnap3 = {
      title: "Poitiers",
      description: "Visiter Poitiers !",
      createDate: new Date(),
      imgUrl: 'https://imgs.search.brave.com/9rLC5v8uvLhxYXNHkGoHw_2BVSqz7hdqsXaRHkymL8o/rs:fit:729:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5N/R1FoTmFaOTY0VTR1/WTdvZzRxTHhRSGFF/MCZwaWQ9QXBp',
      location : 'Poitiers',
    }
  }
}
