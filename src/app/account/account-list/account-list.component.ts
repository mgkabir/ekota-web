import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styles: []
})
export class AccountListComponent implements OnInit {
  accounts: any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    
    this.http.get('http://localhost:8080/ekota/accounts')
      .subscribe(
        (response)=>{
        this.accounts = response;
      },
      (error)=>{
        console.log("error happened : "+error);
      }
      );
  }

}
