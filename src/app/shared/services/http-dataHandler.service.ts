import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, map } from "rxjs";

@Injectable()

export class HttpDataHandlerService{
  
    baseUrl = `https://angular-task-5-90bdd-default-rtdb.firebaseio.com/users.json`;
    leaveUrl = `https://angular-task-5-90bdd-default-rtdb.firebaseio.com/leaveApplicantion.json`;
    sendId = new EventEmitter();
    uId :any;
    leaveBeahSub : BehaviorSubject<any> = new BehaviorSubject("loading...")
    isLoggedIn : boolean = false;
    constructor( private http : HttpClient){}
    

    checkAuthentication(){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.isLoggedIn)
            }, 2000);
        })
    }
    postUsers( newObj : any){
        return this.http.post(this.baseUrl, newObj);
    }
    postLeaves(newObj:any){
        return this.http.post(this.leaveUrl, newObj)
    }
    getLeaves(){
        return this.http.get(this.leaveUrl, {
            headers : new HttpHeaders({
                "name" : 'deepak'
            })
        }).pipe(map((rawData:any)=>{
            let LeaveArr = [];
            for(let data in rawData){
                LeaveArr.push({...rawData[data],id:data})
            }
            this.leaveBeahSub.next(LeaveArr);
            return LeaveArr;
        }))
    }
    
    getId(id:any){
        console.log(id);
        this.uId = id
    }
    sendID(){
        this.sendId.emit(this.uId);
    }
    approve(obj:any, id:any){
        let updUrl = `https://angular-task-5-90bdd-default-rtdb.firebaseio.com/leaveApplicantion/${id}.json`;
        console.log(this.uId);
        return this.http.patch(updUrl, {status : obj})
    }
    getUsers(){
        return this.http.get(this.baseUrl, {
            headers : new HttpHeaders({
                'name' : 'deepak',
            })
        }).pipe(map((rawData : any)=>{
            let arr = [];
            for(let data in rawData ){
                arr.push({...rawData[data], id : data})
            }
            return arr;
        }))
    }
}