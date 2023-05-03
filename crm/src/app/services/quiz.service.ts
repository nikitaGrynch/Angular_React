import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export enum quizModes{
  normal = "normal",
  timer = "timer"
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _httpClient: HttpClient) { }

  getAllQuestions(): Observable<any> {
    return this._httpClient.get(environment.pathToQuestions);
  }
}
