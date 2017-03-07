import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TemplateComponent} from './template/template.component';
import {ModelComponent} from './model/model.component';

const routes: Routes = [{
  path:'',
  component :HomeComponent,

  children:[
   {
  path:'',
  redirectTo: 'model',
   pathMatch: 'full'
},
{
  path:'model',
  component: ModelComponent
 },
{
  path:'template',
  component: TemplateComponent
}
  ]


}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations:[],
  exports: [RouterModule],
  providers: []
})
export class FormsRoutingModule { }
