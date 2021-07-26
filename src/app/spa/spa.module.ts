import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { StandardModule } from '../standard/statndard.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [ ContainerComponent, FooterComponent],
  imports: [
    StandardModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  exports:[
    FooterComponent,
    ContainerComponent
  ]
})
export class SPAModule { }
