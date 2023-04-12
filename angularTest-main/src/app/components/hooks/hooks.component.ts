import {
  Component,
  Input,
  OnChanges,
  OnInit,
  DoCheck,
  SimpleChanges,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss'],
})
export class HooksComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  @Input() timer: any;
  constructor(private dc: ChangeDetectorRef) {
    console.log('constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges', changes);
  }
  ngOnInit(): void {
    console.log('onInit');
  }
  ngDoCheck(): void {
    console.log('DoCheck');
  }
  ngOnDestroy(): void {
    console.log('Destroy');
  }

  change(): void {
    this.dc.detectChanges();
    console.log(this.timer);
  }
}
