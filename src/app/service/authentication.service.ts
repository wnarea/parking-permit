import { Injectable } from '@angular/core';
import { User } from '../shared/User';


const users = [
  new User('admin@cityofmiamibeach.org', 'abc123'),
  new User('support@cityofmiamibeach.org', 'abc123')
];

@Injectable()
export class AuthenticationService {

  constructor() { }

  logoout() {
    localStorage.removeItem("user");
  }

  login(user) {
    const authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser){
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      return true;
    }
    return false;
  }

  isAuthenticated(): User {
    const authenticatedUser = localStorage.getItem("user");
    if (authenticatedUser){
      return JSON.parse(authenticatedUser);
    }
    return null;
  }

}
