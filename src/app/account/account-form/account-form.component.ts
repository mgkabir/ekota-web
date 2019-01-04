import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styles: []
})
export class AccountFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("AccountFormComponent Initialized");
  }

}
