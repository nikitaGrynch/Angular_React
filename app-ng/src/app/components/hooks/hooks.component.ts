import { ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { DetachedRouteHandle } from '@angular/router';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnChanges, OnInit, DoCheck {
  @Input() timer: any;
  constructor(private dc: ChangeDetectorRef){} 


  ngOnChanges(changes: SimpleChanges): void {


  }
  ngDoCheck(): void {
    
  }
  ngOnInit(): void {
  }

}
