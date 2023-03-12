import { Component } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-navbar-dashboard',
  templateUrl: './navbar-dashboard.component.html',
  styleUrls: ['./navbar-dashboard.component.scss']
})
export class NavbarDashboardComponent {

  constructor(public auth: AuthorizationService){

  }
}
