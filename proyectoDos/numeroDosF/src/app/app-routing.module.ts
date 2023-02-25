import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioComponent } from './components/admin/inventario/inventario.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, //enrutar la url=> https://www.algo.com/home
  {path: 'login', component: LoginComponent}, //enrutar la url=> https://www.algo.com/
  {path: 'register', component: RegisterComponent},
  {path: 'admin/inventario', component: InventarioComponent},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '404', pathMatch: 'full'} //este path siempre de ultimo.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
