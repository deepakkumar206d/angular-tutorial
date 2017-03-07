import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { HomeComponent } from './home/home.component';
import { StyledirectivesComponent } from './styledirective/styledirectives.component';

@NgModule({
  imports: [
    CommonModule,
    DirectivesRoutingModule
  ],
  declarations: [HomeComponent, StyledirectivesComponent]
})
export class DirectivesModule { }
