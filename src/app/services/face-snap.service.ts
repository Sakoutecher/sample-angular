import { Injectable } from "@angular/core";
import { FaceSnapModel } from 'src/app/models/face-snap.model';

@Injectable({
    providedIn: 'root'
})

export class FaceSnapService{
    private facesnap: FaceSnapModel[] = [
        {
            id: 1,
            title: "Paris",
            description: "La capitale de la France, avec sa fameuse tour eiffel.",
            createDate: new Date(),
            imgUrl: 'https://imgs.search.brave.com/8zsOTLfOSWsEC-eyQYmpZpcb-R57gCL9HTmNSUa2fh4/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/cTZQMDBJTDZtZWtJ/d2pIbEtmSl9BSGFF/OCZwaWQ9QXBp',
            location: 'Paris',
            snaps: 0,
        },
    
        {
            id: 2,
            title: "Niort",
            description: `La ville ou j'étudie actuellement.`,
            createDate: new Date(),
            imgUrl: 'https://imgs.search.brave.com/knUPIwylkzkkQwrlHrNrmaHJPwQ3_J-Hkl6Kb9CuepE/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uy/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5RYm1DYWxj/YUdXb0lOcmxIcWRD/aGFnSGFGaiZwaWQ9/QXBp',
            location: 'Niort',
            snaps: 0,
        },
    
        {
            id: 3,
            title: "Poitiers",
            description: "Une ville qui est à 1h30 de chez moi.",
            createDate: new Date(),
            imgUrl: 'https://imgs.search.brave.com/9rLC5v8uvLhxYXNHkGoHw_2BVSqz7hdqsXaRHkymL8o/rs:fit:729:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5N/R1FoTmFaOTY0VTR1/WTdvZzRxTHhRSGFF/MCZwaWQ9QXBp',
            location : 'Poitiers',
            snaps: 0,
        }
    ]

    getAllFacesnap (): FaceSnapModel[] {
        return this.facesnap
    }

    addOrdownFaceSnapById(id: number): void {
        const mySnap = this.getFacesnap(id)
        if (mySnap) {
            mySnap.snaps === 0 ? mySnap.snaps++ : mySnap.snaps--
        } else {
            throw new Error('FaceSnap not found !')
        }
    }

    getFacesnap (id: number): FaceSnapModel {
        const mySnap = this.facesnap.find(facesnap => facesnap.id === id)
        if (mySnap) {
            return mySnap
        } else {
            throw new Error('FaceSnap not found !')
        }
    }

    setFacesnap (value: FaceSnapModel[]) {
        this.facesnap = value
    }
}