import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  patternLetters = /^[a-zA-Z ñ]+$/;
  patternEmail = /^[0-9a-zA-Z._-]+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/;
  patternPassword = /^[0-9a-zA-Zñ]+$/;

  constructor() { }

  ngOnInit(): void {
  }

  formSignUp = new FormGroup({
    name: new FormControl('',
    [
      Validators.required,
      Validators.minLength(3), 
      Validators.maxLength(20), 
      Validators.pattern(this.patternLetters)
    ]),
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
      ]),
    confirmPassword: new FormControl('',
      [
        Validators.required
      ]),
    checkbox: new FormControl('',[Validators.requiredTrue])
  })

  isValidField (field:string){
    return this.formSignUp.get(field)?.valid;
  }

  isInvalidField (field:string) {
    return (
      this.formSignUp.get(field)?.invalid && 
      (this.formSignUp.get(field)?.dirty || this.formSignUp.get(field)?.touched)
    )
  }

  onResetForm(){
    this.formSignUp.reset();
  }

  onSaveForm(){
    if(this.formSignUp.valid){
      this.onResetForm();  
    }
  }

  getErrorMessage (field:string) {
    let message;

    if (this.formSignUp.get(field)?.errors?.required) {
      switch(field) {
        case 'name':
          message = 'Por favor, ingrese su nombre.';
          break;
        case 'email':
          message = 'Por favor, ingrese su dirección de correo electrónico.';
          break;
        case 'password':
          message = 'Por favor, ingrese su contraseña.';
          break;
        case 'checkbox':
          message = 'Debe aceptar los términos y condiciones.';
          break;
      }
    } else if (this.formSignUp.get(field)?.hasError('pattern')) {
      switch(field) {
        case 'name':
          message = 'Formato incorrecto, ingrese solo letras y números.';
          break;
        case 'email':
          message = 'Por favor, ingrese una dirección de correo electrónico válida (p.e. someone@example.com).';
          break;
        case 'password':
          message = 'Formato incorrecto, ingrese solo letras y números.';
          break;
      }
    } else if (this.formSignUp.get(field)?.hasError('minlength')) {
      const minLength = this.formSignUp.get(field)?.errors?.minlength.requiredLength;
      message = `Ingrese mínimo ${minLength} caracteres`
    } else if (this.formSignUp.get(field)?.hasError('maxlength')) {
      const maxLength = this.formSignUp.get(field)?.errors?.maxlength.requiredLength;
      message = `Ingrese máximo ${maxLength} caracteres`
    } 

    return message;
  }

}