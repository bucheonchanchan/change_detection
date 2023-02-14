import { Component } from '@angular/core';

@Component({
  selector: 'app-grand-child-new',
  templateUrl: './grand-child-new.component.html',
  styleUrls: ['./grand-child-new.component.css']
})
export class GrandChildNewComponent {
  ngDoCheck(){
    console.log("%c[2] I am grand-child-new component~!", "color: crimson");
  }
}
