import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { PolarComponent } from './polar/polar.component';
import { BubleComponent } from './buble/buble.component'
import {MenuComponent } from './menu/menu.component'
const routes: Routes = [
{
  path:"",
  component:ItemsComponent
},{
  path:"create",
  component:CreateComponent
},{
  path:"edit/:id",
  component:EditComponent
},
{
  path:"bar",
  component:BarComponent
},
{
  path:"pie",
  component:PieComponent
},
{
  path:"buble",
  component:BubleComponent
},
{
  path:"polar",
  component:PolarComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
