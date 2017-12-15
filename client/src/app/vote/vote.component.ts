import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  // currentPoll = {
  //   _id: 2,
  //   creator: 'name',
  //   question: 'Some q?',
  //   createdAt: Date.now(),
  //   options: [{value: 'one', votes: 1}, {value: 'two', votes: 0}, {value: 'three', votes: 3}, {value: 'four', votes: 5}]
  // };
  currentPoll;

  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
    if (!this._apiService.loggedInUser) {
      this._router.navigate(['/']);
    }
    const getId = this._router.url.split('poll/');
    console.log(getId);

    this._apiService.getPoll(getId[1]);
    this._apiService.currentpoll.subscribe(
      (data: any) => this.currentPoll = data
    );
  }

  vote(id) {
    for (let opt of this.currentPoll.options) {
      if (opt._id === id) {
        opt.votes += 1;
      }
    }
    console.log(this.currentPoll.options);
    this._apiService.updatePoll(this.currentPoll._id, this.currentPoll);
  }

}
