import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './guard/auth.guard.service';

const routes: Routes = [
    {path:'', component: HomeComponent, canActivate: [AuthGuardService]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', redirectTo: ''}
]
export const routing = RouterModule.forRoot(routes);