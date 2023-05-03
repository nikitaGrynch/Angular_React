import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizService, quizModes } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  public gameMode: String = quizModes.normal;
  public questions!: any;
  public isStarted: boolean = false;
  public currentQuestion: number = 0;
  public selectedAnswer!: string;
  public score: number = 0;
  public isFinished: boolean = false;
  private timeRef!: any;
  private timeMs!: number;
  public timeStr!: string;
  private questionTimeRef!: any;
  private questionTimeMs!: number;
  private minQuestionTimeMs!: number;
  private maxQuestionTimeMs!: number;
  public minQuestionTimeStr!: string;
  public maxQuestionTimeStr!: string;
  public averageQuestionTimeStr!: string;
  public maxAvailableTimeStr!: string;
  private maxAvailableTimeMs!: number;
  private maxAvailableQuestionTimeMs!: number;
  public isTimeOver: boolean = false;

  constructor(private _quizService: QuizService) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    this._quizService.getAllQuestions().subscribe({
      next: (data) => {
        this.questions = data;
      },
      error: (error) => console.log(error),
    });
  }

  startGame(): void {
    if(this.gameMode == quizModes.timer){
      this.maxAvailableQuestionTimeMs = 10000;
      this.maxAvailableTimeMs = this.maxAvailableQuestionTimeMs * this.questions.length;
      this.maxAvailableTimeStr = convertMsToMinutesSeconds(this.maxAvailableTimeMs);
    }
    this.isStarted = true;
    let startTime = Date.now();
    this.timeRef = setInterval(() => {
      this.timeMs = Date.now() - startTime;
      this.timeStr = convertMsToMinutesSeconds(this.timeMs);
      if(this.timeMs >=  this.maxAvailableTimeMs){
        this.isTimeOver = true;
        clearInterval(this.timeRef);
        clearInterval(this.questionTimeRef);
      }
    });
    this.questionTimeRef = setInterval(() => {
      this.questionTimeMs = Date.now() - startTime;

    });
  }

  selectAnswer(answer: string): void {
    if (answer === this.questions[this.currentQuestion].correctAnswer) {
      this.score++;
    }
    clearInterval(this.questionTimeRef);
    if (this.currentQuestion == 0) {
      this.minQuestionTimeMs = this.questionTimeMs;
      this.maxQuestionTimeMs = this.questionTimeMs;
    } else {
      if (this.questionTimeMs < this.minQuestionTimeMs) {
        this.minQuestionTimeMs = this.questionTimeMs;
      } else if (this.questionTimeMs > this.maxQuestionTimeMs) {
        this.maxQuestionTimeMs = this.questionTimeMs;
      }
    }
    if (this.currentQuestion === this.questions.length - 1) {
      this.isFinished = true;
      clearInterval(this.timeRef);
      clearInterval(this.questionTimeRef);
      this.minQuestionTimeStr = convertMsToMinutesSeconds(this.minQuestionTimeMs);
      this.maxQuestionTimeStr = convertMsToMinutesSeconds(this.maxQuestionTimeMs);
      this.averageQuestionTimeStr = convertMsToMinutesSeconds(this.timeMs / this.questions.length);
    } else {
      this.currentQuestion++;
      let startTime = Date.now();
      this.questionTimeRef = setInterval(() => {
        this.questionTimeMs = Date.now() - startTime;
      });
    }
  }

  restartButtonClick(): void {
    this.isTimeOver = false;
    this.isStarted = false;
    this.currentQuestion = 0;
    this.isFinished = false;
    this.score = 0;
  }
}

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

function convertMsToMinutesSeconds(milliseconds: number) {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.round((milliseconds % 60000) / 1000);

  return seconds === 60
    ? `${minutes + 1}:00`
    : `${minutes}:${padTo2Digits(seconds)}`;
}
