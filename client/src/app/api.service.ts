import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  loggedInUser: string;
  allPolls: BehaviorSubject<any[]> = new BehaviorSubject([]);
  currentpoll = new BehaviorSubject({});

  constructor(private _http: HttpClient) { }

  getAllPolls() {
    this._http.get('/polls').subscribe(
      (response: any[]) => {
        // console.log('POLLS', response);
        this.allPolls.next(response);
      },
      err => console.log(err)
    );
  }

  getPoll(id) {
    let url = `/polls/${id}`;
    this._http.get(url).subscribe(
      (res) => this.currentpoll.next(res)
    );
  }

  addPoll(poll) {
    this._http.post('/polls', poll).subscribe(
      response => {
        // console.log('ADDED POLL', response);
        this.getAllPolls();
      },
      err => console.log(err)
    );
  }

  updatePoll(id, poll) {
    let url = `/polls/${id}`;
    this._http.put(url, poll).subscribe(
      (res) => this.getPoll(id)
    );
  }

  deletePoll(id) {
    let url = `/polls/${id}`;
    this._http.delete(url).subscribe(
      res => this.getAllPolls(),
      err => console.log(err)
    );
  }


}
