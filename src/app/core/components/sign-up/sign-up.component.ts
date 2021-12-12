import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../../../shared/validators/passwordValidator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy {

  patternLetters = /^[a-zA-Z ñ]+$/;
  patternEmail = /^[0-9a-zA-Z._-]+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/;
  patternPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,12}$/;

  passwordTypeInput:string = "password";
  confirmPasswordTypeInput:string = "password";

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    console.log(`%c *********** ngOnInit - SingUpComponent`, `color:blue`);
  }

  ngOnDestroy(): void {
    console.log(`%c *********** ngOnDestroy - SingUpComponent`, `color:red`);
  }

  formSignUp:FormGroup = this.fb.group({
    name: ['',
      [
        Validators.required,
        Validators.minLength(3), 
        Validators.maxLength(20), 
        Validators.pattern(this.patternLetters)
      ]],
    email: ['',
      [
        Validators.required,
        Validators.pattern(this.patternEmail)
      ]],
    password: ['',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12), 
        Validators.pattern(this.patternPassword)
      ]],
    confirmPassword: ['',
      [
        Validators.required
      ]],
    checkbox: ['', [Validators.requiredTrue]]
  }, {validator: PasswordValidator})

  isValidField (field:string){
    return this.formSignUp.get(field)?.valid;
  }

  isInvalidField (field:string) {
    if( field == 'confirmPassword' ){
      return  (
        this.formSignUp.errors?.misMatch || 
        (this.formSignUp.get(field)?.invalid && 
        (this.formSignUp.get(field)?.dirty || this.formSignUp.get(field)?.touched)));
      
    } else {
        return (
          this.formSignUp.get(field)?.invalid && 
          (this.formSignUp.get(field)?.dirty || this.formSignUp.get(field)?.touched)
        )
    }
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

    if( field == 'confirmPassword' ){
      message = this.formSignUp.errors?.misMatch? 'Las contraseñas no coinciden' : null;
    } else {
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
        }  else if (this.formSignUp.get(field)?.hasError('minlength')) {
          const minLength = this.formSignUp.get(field)?.errors?.minlength.requiredLength;
          message = `Ingrese mínimo ${minLength} caracteres`
        } else if (this.formSignUp.get(field)?.hasError('maxlength')) {
          const maxLength = this.formSignUp.get(field)?.errors?.maxlength.requiredLength;
          message = `Ingrese máximo ${maxLength} caracteres`
        } else if (this.formSignUp.get(field)?.errors?.pattern) {
          switch(field) {
            case 'name':
              message = 'Formato incorrecto, ingrese solo letras';
              break;
            case 'email':
              message = 'Por favor, ingrese una dirección de correo electrónico válida (p.e. someone@example.com).';
              break;
            case 'password':
              message = 'Para mayor seguridad el password debe estar formado por letras mayúsculas, minúsculas y números';
              break;
          }
        }     
    }
    return message; 
  }

  changePasswordTypeInput(type: string){
    type == "password"? this.passwordTypeInput="text" : this.passwordTypeInput="password";
  }

  changeConfirmPasswordTypeInput(type: string){
    type == "password"? this.confirmPasswordTypeInput="text" : this.confirmPasswordTypeInput="password";
  }

}
