import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  constructor() {
    console.log('Construct element');
  }

  ngOnInit(): void {
    console.log('init component counter');
  }

  counter: number = 0;

  public up(): void {
    this.counter++;
  }

  public down(): void {
    if (this.counter > 0) {
      this.counter--;
    }
  }

  public default(): void {
    this.counter = 0;
  }
}
