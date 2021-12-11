import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  patternEmail = /^[0-9a-zA-Z._-]+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/;
  patternPassword = /^[0-9a-zA-Zñ]+$/;

  constructor() { }

  ngOnInit(): void {
  }

  formSignIn = new FormGroup({
    email: new FormControl('',
      [
        Validators.required,
        Validators.pattern(this.patternEmail)
      ]),
    password: new FormControl('',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12), 
        Validators.pattern(this.patternPassword)
      ])
  })

  isValidField (field:string){
    return this.formSignIn.get(field)?.valid;
  }

  isInvalidField (field:string) {
    return (
      this.formSignIn.get(field)?.invalid && 
      (this.formSignIn.get(field)?.dirty || this.formSignIn.get(field)?.touched)
    )
  }

  onResetForm(){
    this.formSignIn.reset();
  }

  onSaveForm(){
    if(this.formSignIn.valid){
      this.onResetForm();  
    }
  }

  getErrorMessage (field:string) {
    let message;

    if (this.formSignIn.get(field)?.errors?.required) {
      switch(field) {
        case 'email':
          message = 'Por favor, ingrese su dirección de correo electrónico.';
          break;
        case 'password':
          message = 'Por favor, ingrese su contraseña.';
          break;
      }
    } else if (this.formSignIn.get(field)?.hasError('pattern')) {
      switch(field) {
        case 'email':
          message = 'Por favor, ingrese una dirección de correo electrónico válida (p.e. someone@example.com).';
          break;
        case 'password':
          message = 'Formato incorrecto, ingrese solo letras y números.';
          break;
      }
    } else if (this.formSignIn.get(field)?.hasError('minlength')) {
      const minLength = this.formSignIn.get(field)?.errors?.minlength.requiredLength;
      message = `La contraseña debe tener mínimo ${minLength} caracteres`
    } else if (this.formSignIn.get(field)?.hasError('maxlength')) {
      const maxLength = this.formSignIn.get(field)?.errors?.maxlength.requiredLength;
      message = `La contraseña no debe exceder más de ${maxLength} caracteres`
    } 

    return message;
  }


}