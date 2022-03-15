import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '',  redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {
    path: 'contactForm',
    pathMatch: 'full',
    loadChildren: () => import('./contact-form-module/contact-form-module.module').then(m => m.ContactFormModuleModule)
  },
  {path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
