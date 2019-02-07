import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  submitted = false;
  loading = false;

  constructor( private formbuilder: FormBuilder,
               private activatedRoute: ActivatedRoute,
               private alertService: AlertService,
               private authServivce: AuthenticationService, 
               private router: Router
    ) { }

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.authServivce.logout();

    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl']||'/';
  }

  get f(){
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.loginForm.invalid){
      return;
    }
    this.loading = true;
    this.authServivce.login(this.f.username.value,this.f.password.value)
    .pipe(first()).subscribe(
      _data =>{ this.router.navigate([this.returnUrl]);
      },
      error =>{ this.alertService.error(error);
      this.loading = false;
      });
  }

}
