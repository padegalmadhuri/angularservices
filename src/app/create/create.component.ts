import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ChartserviceService } from '../chartservice.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  userData;
  constructor(private service:ChartserviceService,private fb:FormBuilder,private router:Router) {
    this.userData=this.fb.group({
      label:this.fb.control(""),
      data:this.fb.control("")
    })

  }

  ngOnInit(): void {
  }
createData(){

  this.service.postData(this.userData.value).subscribe((data)=>{
    this.router.navigate(["/"]);
  });
}

}
