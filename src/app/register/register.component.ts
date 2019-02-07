import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private formbuilder: FormBuilder,
    private alertService: AlertService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['',[Validators.email,Validators.required]],
      phonenumber: [null],
      notification:['email']
    });
    this.formControlValueChanged();
  }

  get f(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.registerForm.invalid){
      return;
    }
    this.loading = true;
    debugger;
    this.userService.register(this.registerForm.value)
    .pipe(first()).subscribe(
      data => {
        this.alertService.success("Registration Success", true);
        this.router.navigate['/login'];
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    )
  }

  formControlValueChanged() {
    const phoneControl = this.registerForm.get('phonenumber');
    this.registerForm.get('notification').valueChanges.subscribe(
        (mode: string) => {
            console.log(mode);
            if (mode === 'phone') {
                phoneControl.setValidators([Validators.required,Validators.minLength(10)]);
            }
            else if (mode === 'email') {
                phoneControl.clearValidators();
            }
            phoneControl.updateValueAndValidity();
        });
  }
}
