import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { ChartserviceService } from '../chartservice.service'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  userData;
  currentIndex=this.activatedRoute.snapshot.params.id;;
  constructor(private service:ChartserviceService,private fb:FormBuilder,private router:Router,private activatedRoute: ActivatedRoute) {
    this.userData=this.fb.group({
      Label:this.fb.control(""),
      data:this.fb.control("")
    })
    this.service.retriveDataById(this.currentIndex).subscribe((data) => {
      delete data.id;
      this.userData.setValue(data);
      console.log(data);
    });

  }

  ngOnInit(): void {
  }
  updateData() {
   this.service.updateData(this.currentIndex,this.userData.value).subscribe(()=>{
     this.router.navigate(['/']);
   })
 }
}
