import { ChangeDetectionStrategy, ViewEncapsulation, Component, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./child.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ChildComponent {
  @Input() inputData: any;

  constructor(
    private cdr: ChangeDetectorRef
  ){ }

  ngOnInit(){
    // this.cdr.detach();
  }

  ngDoCheck(){
    console.log("%c[1] I am child component~!", "color: green");
  }

  myFuncA(){
    console.log(`myFuncA~!`);
  }
  myFuncB(){
    console.log(`myFuncB~!`);
  }
}
