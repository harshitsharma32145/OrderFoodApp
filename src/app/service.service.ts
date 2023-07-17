import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  adddata(data:any)
  {
   return  this.http.post('https://localhost:7125/api/Food/AddFoodData',data)
  }
}
