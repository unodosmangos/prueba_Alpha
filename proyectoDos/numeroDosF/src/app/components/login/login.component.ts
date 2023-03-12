import { Component } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user = {
    'email': '',
    'password': ''
  }

  constructor (
    private authorization: AuthorizationService,
    private router: Router){
  }

  signIn() {
    this.authorization.signIn(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/apply'])
        },
        err => console.log(err)
      )
  }

}
