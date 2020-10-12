import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/private/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import {WhatsappComponent} from './pages/public/whatsapp/whatsapp.component';
import { AuthGuard } from './shared/guards/auth.guard';
// import {WhatsappComponent} from './pages/public/whatsapp/whatsapp.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'chats', component: WhatsappComponent},
  { path: 'register', component:  RegisterComponent},
  // { path: 'chats', component: WhatsappComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
