import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodiesComponent } from './components/bodies/bodies.component';
import { BodyComponent } from './components/body/body.component';

const routes: Routes = [
  {path:'', component:BodiesComponent},
  {path:'body/:id', component:BodyComponent},
  {path:'**', component:BodiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
