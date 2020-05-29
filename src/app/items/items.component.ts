import { Component, OnInit } from '@angular/core';
import { ChartserviceService } from '../chartservice.service'
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  userData;
    constructor(private service:ChartserviceService) {
      this.loadData();
    }
    ngOnInit(): void {
    }
  loadData(){
    this.service.retriveData().subscribe((data)=>{
      this.userData=data;
    });
  }
    deleteData(id){
      // console.log("inside delete");
      let cnfrm=confirm("you want to delete this data permanently?");
      if(cnfrm){
        this.service.deleteData(id).subscribe(()=>{
          this.loadData();
        })
      }

    }


}
