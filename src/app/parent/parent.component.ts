import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  inputData = { name: "CHANKI", age: 35 };
  
  ngDoCheck(){
    console.log("%cI am parent component~!", "color: blue");
  }

  parentButtonA(){ this.inputData = { name: "CHANKI-01", age: 0 } };
  parentButtonB(){ this.inputData.name = "CHANKI-02"; this.inputData.age = 1; }
}
