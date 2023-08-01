import { Component, OnInit } from '@angular/core';

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
  ngOnInit(): void {
    // this.getBtn()
  }
  
  // getBtn(){
  //   // console.log(this.signBtn);
  //   this.signBtn?.classList.add('d-none')
  // }
}
