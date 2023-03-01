import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { InventarioComponent } from './components/admin/inventario/inventario.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MainAdminComponent } from './components/admin/main-admin/main-admin.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NavbarHomeComponent } from './components/navbar/navbar-home/navbar-home.component';
import { NavbarDashboardComponent } from './components/navbar/navbar-dashboard/navbar-dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { FirstviewComponent } from './components/home/firstview/firstview.component';
import { SecondviewComponent } from './components/home/secondview/secondview.component';
import { ThirdviewComponent } from './components/home/thirdview/thirdview.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    InventarioComponent,
    NotfoundComponent,
    MainAdminComponent,
    NavbarHomeComponent,
    NavbarDashboardComponent,
    FooterComponent,
    FirstviewComponent,
    SecondviewComponent,
    ThirdviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
