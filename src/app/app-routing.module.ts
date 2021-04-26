import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonComponent } from './don/don.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DepotComponent } from './depot/depot.component';
import { AuthGuard } from './_helpers';
import { LoginComponent } from './account/login.component';
import { RegisterComponent } from './account/register.component';
import { AdminComponent } from './admin/admin.component';
import { CompteComponent } from './compte/compte.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
  // {
  //   path: 'admin',
  //   loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule),
  //   canLoad: [AuthGuard]
  // },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'don',
    component: DonComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: AccueilComponent
  },
  {
    path: 'compte',
    component: CompteComponent
  },
  {
    path: 'depot',
    component: DepotComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'accueil',
    component: AccueilComponent
  },
  { path: 'users',
    loadChildren: usersModule,
    canActivate: [AuthGuard],
    //isAdmin: [AuthGuard],
  },
  { path: 'account',
    loadChildren: accountModule
  },
  {
    path: '**',
    component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
