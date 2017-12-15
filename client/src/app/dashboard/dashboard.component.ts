import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // polls = [{_id: 2, question: 'Some q?', createdAt: Date.now(), creator: 'name'}];
  polls;
  currentUser;

  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
    if (!this._apiService.loggedInUser) {
      this._router.navigate(['/']);
    }
    this.currentUser = this._apiService.loggedInUser;
    this._apiService.getAllPolls();
    this._apiService.allPolls.subscribe(
      data => this.polls = data
    );
  }

  logout() {
    this._apiService.loggedInUser = undefined;
    this._router.navigate(['/']);
  }

  deletePoll(id) {
    console.log(id);
    this._apiService.deletePoll(id);
  }

}
