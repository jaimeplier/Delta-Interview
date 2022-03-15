import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactFormService } from '../contact-form.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent implements OnInit {
  formFlag: boolean = false;
  movieForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    correo: ['', [Validators.required]],
    telefono: ['+', [Validators.required]],
    mensaje: ['', [Validators.required, Validators.maxLength(30)]]  
  });

  constructor(private fb: FormBuilder, private formService: ContactFormService) { }

  ngOnInit(): void {
  }

  submit() {
    this.formFlag = true;
    console.log(this.movieForm.value)
    this.formService.sendContactForm(this.movieForm.value)
  }
}
