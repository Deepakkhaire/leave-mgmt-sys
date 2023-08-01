import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpDataHandlerService } from '../shared/services/http-dataHandler.service';

@Component({
  selector: 'app-hod-dashboard',
  templateUrl: './hod-dashboard.component.html',
  styleUrls: ['./hod-dashboard.component.css']
})
export class HodDashboardComponent implements OnInit {
  list: any;
  currentUser: any;
  leaveLists:any
  approved:any;
  rejected:any;
  uid:any
  constructor(private activeRoute: ActivatedRoute, private httpServe: HttpDataHandlerService) { }

  ngOnInit(): void {
    this.getUsersList()
  }
  getUsersList() {
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
        this.getLeavesList()
      })
    })
  }


  getLeavesList(){
    this.httpServe.getLeaves().subscribe((res:any)=>{
      // this.leaveLists = res;
      this.leaveLists = res.filter((user:any)=>{
        return user.dep === this.currentUser?.dep
      })
      console.log(this.leaveLists)
    })
  }
  
  approveReq(str : any, id:any, eve:any){
    
    console.log(eve);
    this.httpServe.approve(str, id).subscribe((res : any)=>{
      console.log(res);
      this.httpServe.getLeaves().subscribe((res:any)=>{
        this.leaveLists = res.filter((user:any)=>{
          return user.dep === this.currentUser?.dep
        })
        console.log(this.leaveLists)
      })
    })
  }

}
