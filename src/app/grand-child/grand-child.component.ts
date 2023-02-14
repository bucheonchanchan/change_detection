import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandChildComponent {
  @Input() inputData: any;

  constructor(
    private cdr: ChangeDetectorRef
  ){ }
  ngOnInit(){
    // this.cdr.detach();
  }
  ngDoCheck(){
    console.log("%c[1] I am grand child component~! ", "color: grey");
  }
  funcA(){
    console.log("I am funcA~!");
  }
  funcB(){
    console.log("I am funcB~!");
  }
}
