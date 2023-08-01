import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpDataHandlerService } from '../shared/services/http-dataHandler.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  staffInfo:any;


  constructor(private fb : FormBuilder, private httpServe : HttpDataHandlerService){}
  ngOnInit(): void {
    this.staffInfo = this.fb.group({
      designation : this.fb.control('',Validators.required),
      firstName : this.fb.control('', Validators.required),
      lastName : this.fb.control('', Validators.required),
      email : this.fb.control('', Validators.required),
      contact : this.fb.control('', Validators.required),
      dep : this.fb.control('', Validators.required),
      username : this.fb.control('', Validators.required),
      password : this.fb.control('', Validators.required)
    })
  }
  onSubmit(){
    console.log(this.staffInfo.value);
    this.httpServe.postUsers(this.staffInfo.value).subscribe((res:any)=>{
      // console.log(res);
      alert("Thank You For Registration...")
      this.staffInfo.reset();
    })
  }

}
