import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { Material } from './material.module';
import { AlertComponent } from './alert/alert.component';
import { routing } from './app.routes';
import { JwtIntercepter } from './helpers/jwt-intercepter.service';
import { fakeBackendProvider } from './helpers/fakebackend.service';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { SerachPipe } from './serach.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AlertComponent,
    SerachPipe
  ],
  imports: [
    BrowserModule,
    Material,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtIntercepter, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
