import { Component } from '@angular/core';

@Component({
  selector: 'app-child-new',
  templateUrl: './child-new.component.html',
  styleUrls: ['./child-new.component.css']
})
export class ChildNewComponent {
  ngDoCheck(){
    console.log("%c[2] I am child-new component~!", "color: chocolate");
  }
  myFuncA(){
    console.log(`myFuncA~!`);
  }
  myFuncB(){
    console.log(`myFuncB~!`);
  }
}
