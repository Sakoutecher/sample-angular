import { Component, Input, OnInit } from '@angular/core';
import { FaceSnapModel } from 'src/app/models/face-snap.model';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  facesnap!: FaceSnapModel[]

  ngOnInit(): void {
    this.facesnap = [{
      title: "Paris",
      description: "Visiter Paris !",
      createDate: new Date(),
      imgUrl: 'https://imgs.search.brave.com/8zsOTLfOSWsEC-eyQYmpZpcb-R57gCL9HTmNSUa2fh4/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/cTZQMDBJTDZtZWtJ/d2pIbEtmSl9BSGFF/OCZwaWQ9QXBp',
      location: 'Paris',
    },
    
    {
      title: "Niort",
      description: "Visiter Niort !",
      createDate: new Date(),
      imgUrl: 'https://imgs.search.brave.com/knUPIwylkzkkQwrlHrNrmaHJPwQ3_J-Hkl6Kb9CuepE/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uy/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5RYm1DYWxj/YUdXb0lOcmxIcWRD/aGFnSGFGaiZwaWQ9/QXBp',
      location: 'Niort',
    },
    
    {
      title: "Poitiers",
      description: "Visiter Poitiers !",
      createDate: new Date(),
      imgUrl: 'https://imgs.search.brave.com/9rLC5v8uvLhxYXNHkGoHw_2BVSqz7hdqsXaRHkymL8o/rs:fit:729:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5N/R1FoTmFaOTY0VTR1/WTdvZzRxTHhRSGFF/MCZwaWQ9QXBp',
      location : 'Poitiers',
    }]
  }
}
