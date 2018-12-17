import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/ekota/accounts').subscribe(data=>console.log("accounts component data : "+data), err=>console.log("accounts component err : "+err));
  }

}
