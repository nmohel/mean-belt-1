import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';

  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
    if (this._apiService.loggedInUser !== '') {
      this._router.navigate(['/dashboard']);
    }
  }

  login() {
    this._apiService.loggedInUser = this.username;
    this.username = '';
    this._router.navigate(['/dashboard']);
  }

}
