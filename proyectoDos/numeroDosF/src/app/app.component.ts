import { Component } from '@angular/core';
import * as AOS from 'aos';
import { AuthorizationService } from './services/authorization.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'numeroDosF';

  constructor(private authorization: AuthorizationService){

  }

  ngOnInit() {
    AOS.init()
    window.addEventListener('load',AOS.refresh)
  }
}
