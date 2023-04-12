import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private _http: HttpClient) { }
    getResume(): Observable<any>{
      return this._http.get('http://localhost:3000/resume')
    }
  
}
