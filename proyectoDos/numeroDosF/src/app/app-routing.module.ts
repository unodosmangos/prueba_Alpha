import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioComponent } from './components/admin/inventario/inventario.component';
import { ApplyComponent } from './components/apply/apply.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';

import { AuthorizationGuard } from './authorization.guard';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { DosComponent } from './components/how-it-works/dos/dos.component';
import { TresComponent } from './components/how-it-works/tres/tres.component';
import { CuatroComponent } from './components/how-it-works/cuatro/cuatro.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, //enrutar la url=> https://www.algo.com/
  {path: 'login', component: LoginComponent}, //enrutar la url=> https://www.algo.com/login
  {path: 'register', component: RegisterComponent},
  {path: 'apply', component: ApplyComponent, canActivate: [AuthorizationGuard]},
  {path: 'how-it-works', component: HowItWorksComponent},
  {path: 'steptwo', component: DosComponent},
  {path: 'stepthree', component: TresComponent},
  {path: 'stepfour', component: CuatroComponent},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '404', pathMatch: 'full'} //este path siempre de ultimo.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
