import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpDataHandlerService } from '../shared/services/http-dataHandler.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css']
})
export class StaffDashboardComponent implements OnInit {

  leaveDetails: any;
  allUsers: any;
  leavLists: any
  currentUser: any;
  totalDays: any;
  userID: any;
  list: any
  uid: any;
  totalLeave: any;
  apprLeaves: any = 0;
  pendLeaves: any = 0;
  rejLeaves: any = 0;
  constructor(private fb: FormBuilder, private httpServe: HttpDataHandlerService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.leaveDetails = this.fb.group({
      startDate: this.fb.control('', Validators.required),
      endDate: this.fb.control('', Validators.required),
      reason: this.fb.control('', Validators.required),
    })
    this.getUsersList();


  }
  onSubmit() {
    this.userID = this.httpServe.uId
    console.log(this.userID);
    console.log(this.leaveDetails.value);
    console.log(this.leaveDetails.value.startDate);
    let date1 = new Date(this.leaveDetails.value.startDate)
    let date2 = new Date(this.leaveDetails.value.endDate)
    let noOfDays = date2.getTime() - date1.getTime();
    this.totalDays = noOfDays / (1000 * 3600 * 24),

      console.log(this.totalDays);

    let newObj = {
      designation: this.currentUser.designation,
      firstName: this.currentUser.firstName,
      lastName: this.currentUser.lastName,
      dep: this.currentUser.dep,
      lid: this.currentUser.id,
      status: 'pending',
      startDate: this.leaveDetails.value.startDate,
      endDate: this.leaveDetails.value.endDate,
      totalDays: this.totalDays,
      reason: this.leaveDetails.value.reason
    }
    console.log(newObj);
    this.httpServe.postLeaves(newObj).subscribe((res: any) => {
      console.log(res);
      this.getUsersList()
    })
    
    this.leaveDetails.reset();

  }


  getUsersList() {
    // this.httpServe.sendId.subscribe((res)=>{
    //   let currId = res 
    //   console.log(currId);

    // });
    this.activeRoute.paramMap.subscribe((res: any) => {
      this.uid = res.get('id');
      console.log(this.uid);
      this.httpServe.getUsers().subscribe((res: any) => {
        this.list = res;
        console.log(this.list);
        this.list.forEach((uId: any) => {
          if (uId.id == this.uid) {
            this.currentUser = uId;
            console.log(this.currentUser);

          }
        })
        this.httpServe.getLeaves().subscribe((res: any) => {
        
          this.leavLists = res.filter((user: any) => {
            return user.dep === this.currentUser?.dep && user.lid === this.uid;
          })
          console.log(this.leavLists.length);
          this.CalculateLeaves()
        })

      })

    })


  }
  CalculateLeaves(){
    this.totalLeave = this.leavLists.length
    this.leavLists.forEach((user: any) => {
      if (user.status == "Approved") {
        this.apprLeaves++
      } else if (user.status == "pending") {
        this.pendLeaves++
      } else if (user.status == "Rejected") {
        this.rejLeaves++
      }
    })
  }


}
