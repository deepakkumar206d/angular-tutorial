import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';


import { FormsRoutingModule } from './forms-routing.module';
import { HomeComponent } from './home/home.component';
import { TemplateComponent } from './template/template.component';
import { ModelComponent } from './model/model.component';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [HomeComponent, TemplateComponent, ModelComponent]
})
export class FormsModule {}
