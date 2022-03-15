import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form-component/contact-form.component';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { ContactFormRoutingModule } from './contact-form-routing.module';
import { ContactFormService } from './contact-form.service';



@NgModule({
  declarations: [
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ContactFormRoutingModule
  ],
  providers: [
    FormBuilder,
    Validators,
    ContactFormService
  ]
})
export class ContactFormModuleModule { }
