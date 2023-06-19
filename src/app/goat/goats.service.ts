import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Goats } from './goats';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor( private http: HttpClient) { }
  baseUrl: string = 'http://localhost/';

  getGoats() {
    return this.http.get<Goats[]>(this.baseUrl+'view.php');
  } 

  getSingleStudent(id:any) {
    return this.http.get<Goats[]>(this.baseUrl+'view.php?id='+id);
  } 
  
  deleteGoat(id:any) {
    console.log(id);
    return this.http.delete(this.baseUrl+'delete.php?id='+ id);  
  }  

  createStudent(goat:any) {
    return this.http.post(this.baseUrl+'insert.php', goat);  
  }  

  editStudent(goat:any) {
      return this.http.put(this.baseUrl+'update.php', goat);  
    }  
}