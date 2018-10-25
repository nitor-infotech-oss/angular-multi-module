import { Component, OnInit } from '@angular/core';

import { UserService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private title: String;

  constructor(private userService: UserService) {
    this.title = 'Web App 1';
  }

  ngOnInit() {
    this.userService.populate();
  }
}
