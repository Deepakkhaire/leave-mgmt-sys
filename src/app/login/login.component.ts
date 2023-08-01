import { Component, OnInit } from '@angular/core';
import { HttpDataHandlerService } from '../shared/services/http-dataHandler.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  allUsers : any;
  authUsers :any;
  userId : any;
  leavesDep : any;
  errMsg:any;
  constructor(private httpServe : HttpDataHandlerService, private router : Router, private activeRoute: ActivatedRoute){  }

  ngOnInit(): void {
    this.authUsers = new FormGroup({
      username : new FormControl(''),
      password : new FormControl(''),
    })
    // this.login()
    this.httpServe.getUsers().subscribe((res:any)=>{
      this.allUsers = res;
      console.log(this.allUsers);
    })

    this.httpServe.getLeaves().subscribe((res : any)=>{
      this.leavesDep = res;
      console.log(this.leavesDep);
    })
 
  }
  login(){
    this.httpServe.isLoggedIn = true;
    this.allUsers = this.allUsers.find((user : any) =>{
      return user.username == this.authUsers.value.username;
    })
    console.log(this.allUsers.username);
    if(this.allUsers.username == this.authUsers.value.username && this.allUsers.password == this.authUsers.value.password){
      console.log('success');
      if(this.allUsers.designation === 'hod'){
        console.log('this is hod dashboard');
        this.router.navigate(
          ['hod/dashboard', this.allUsers.id],
        
        )
      }else if(this.allUsers.designation === 'staff'){
        this.router.navigate(['staff/dashboard', this.allUsers.id])
      }
    }else{
      console.log('false');
      this.errMsg = "Invalid Username and Password..."
      // alert("Username or Password are Invalid...")
      this.httpServe.getUsers().subscribe((res:any)=>{
        this.allUsers = res;
        // console.log(this.allUsers);
      })
    }
    this.userId = this.allUsers.id;
    console.log(this.userId);
    this.httpServe.getId(this.userId);
  }
 
}
