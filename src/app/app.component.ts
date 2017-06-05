/**
 * Created by wnarea on 6/4/17.
 */
import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "./service/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: 'template/app.html'
})
export class AppComponent implements OnInit {

  constructor(public auth: AuthenticationService) {
    console.log("AppComponent: constructor");
  }

  ngOnInit() {
    console.log("AppComponent: Checking if the user is already authenticated");
    this.auth.isAuthenticated();
  }

}
