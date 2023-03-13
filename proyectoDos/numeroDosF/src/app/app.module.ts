import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

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
import { ApplyComponent } from './components/apply/apply.component';

import { AuthorizationGuard } from './authorization.guard'
import { TokenInterceptorService } from './services/token-interceptor.service';
import { FourthviewComponent } from './components/home/fourthview/fourthview.component';
import { FifthviewComponent } from './components/home/fifthview/fifthview.component';
import { SixthviewComponent } from './components/home/sixthview/sixthview.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { NavbarHiwComponent } from './components/navbar/navbar-hiw/navbar-hiw.component';
import { UnoComponent } from './components/how-it-works/uno/uno.component';
import { DosComponent } from './components/how-it-works/dos/dos.component';
import { TresComponent } from './components/how-it-works/tres/tres.component';
import { CuatroComponent } from './components/how-it-works/cuatro/cuatro.component'


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
    ApplyComponent,
    FourthviewComponent,
    FifthviewComponent,
    SixthviewComponent,
    HowItWorksComponent,
    NavbarHiwComponent,
    UnoComponent,
    DosComponent,
    TresComponent,
    CuatroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthorizationGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
