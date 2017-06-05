import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../service/authentication.service";
import {User} from "../../shared/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user = new User('', '');
  public errorMsg = '';

  constructor(private _auth: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    if (!this._auth.login(this.user)) {
      this.errorMsg = 'Failed to login';
    }
  }
}
