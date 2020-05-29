import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ItemsComponent } from './items/items.component';
import { MenuComponent } from './menu/menu.component';
//import { GraphComponent } from './graph/graph.component';
import { ChartsModule } from 'ng2-charts';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { PolarComponent } from './polar/polar.component';
import { BubleComponent } from './buble/buble.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    EditComponent,
    ItemsComponent,
    MenuComponent,
    BarComponent,
    PieComponent,
    PolarComponent,
    BubleComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule
  ],
  providers: [{provide: LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
