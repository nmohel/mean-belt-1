import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  currentUser;
  newPoll = {
    creator: this.currentUser,
    question: '',
    options: [{value: '', votes: 0}, {value: '', votes: 0}, {value: '', votes: 0}, {value: '', votes: 0}]};


  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
    if (!this._apiService.loggedInUser) {
      this._router.navigate(['/']);
    }
    this.currentUser = this._apiService.loggedInUser;
    this.newPoll.creator = this.currentUser;
  }

  addPoll() {
    console.log(this.newPoll);
    for (let opt of this.newPoll.options) {
      console.log(opt.value);
    }
    this._apiService.addPoll(this.newPoll);
    this._router.navigate(['/dashboard']);
  }

}
