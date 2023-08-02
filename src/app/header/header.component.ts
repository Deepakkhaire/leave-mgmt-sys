import { Component, OnInit } from '@angular/core';
import { HttpDataHandlerService } from '../shared/services/http-dataHandler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  // signBtn = document.getElementById('signInBtn');
  // logOutBtn = document.getElementById('signOutBtn');
  showTxt :boolean = true;
  isNewUser:boolean =true;
  constructor( private httpsServe : HttpDataHandlerService, private router : Router){}
  ngOnInit(): void {
  }
  loggedOutt(){
    this.httpsServe.loggedOut();
    this.router.navigate(["/login"])
  }
  
}
