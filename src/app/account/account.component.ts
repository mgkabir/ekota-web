import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accounts: any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/ekota/accounts')
      .subscribe((response)=>{
        this.accounts = response;
      });
  }

}
