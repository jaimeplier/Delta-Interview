import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form-component/contact-form.component';


const routes: Routes = [
  { path : '', component : ContactFormComponent }
];


// const routes: Routes = [
//     { path : '', children: [ 
//         {
//             path:'foo', component : ContactFormComponent}] }
//   ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactFormRoutingModule { }