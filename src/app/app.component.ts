import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}";
  constructor(){}

  
  ss(x:any){
    alert("Name"+":"+ x.fname +"\n"+"Mobile Number"+":"+x.num+"\n"+"Email ID"+":"+x.mail+"\n"+"Is Second vaccination done"+":"+
    x.dose+"\n"+"Date of Second vaccination"+":"+x.dt+"\n"+"State"+":"+x.st)
  }

}
