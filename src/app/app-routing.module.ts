import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaceSnapDetailsComponent } from "./components/face-snap-details/face-snap-details.component";
import { FaceSnapListComponent } from "./components/face-snap-list/face-snap-list.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes =  [
    {
        path: 'facesnaps/:id',
        component: FaceSnapDetailsComponent
    },
    {
        path: 'facesnaps',
        component: FaceSnapListComponent
    },
    {
        path: '',
        component: HomeComponent
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ], 
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}