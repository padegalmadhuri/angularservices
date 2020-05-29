import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChartserviceService {

  constructor(private http:HttpClient) { }
  retriveData():Observable<any>{
    return this.http.get("https://5ed11a114e6d7200163a05dd.mockapi.io/users1")
  }
  postData(userData):Observable<any>{
    return this.http.post("https://5ed11a114e6d7200163a05dd.mockapi.io/users1",userData);
  }

  deleteData(id):Observable<any>{
    return this.http.delete(`https://5ed11a114e6d7200163a05dd.mockapi.io/users1/${id}`);
  }
  retriveDataById(id):Observable<any>{
    return this.http.get(`https://5ed11a114e6d7200163a05dd.mockapi.io/users1/${id}`);
  }

  updateData(id,userData):Observable<any>{
    return this.http.put(`https://5ed11a114e6d7200163a05dd.mockapi.io/users1/${id}`,userData);
  }
}
