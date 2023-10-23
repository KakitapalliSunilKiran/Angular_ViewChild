import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'viewchild';

  @ViewChild('dobInput') dateofbirth: ElementRef | any;
  @ViewChild('ageInput') age: ElementRef | any;

  @ViewChild(ChildcomponentComponent,{static:true}) sunilvich: ChildcomponentComponent | undefined;

  //Event
  //HTMLInputElement
  //ElementRef
  calculateage(){
    let birtYear=new Date(this.dateofbirth?.nativeElement.value).getFullYear();
    let currentyear=new Date().getFullYear();
    let age:number=currentyear-birtYear;
    this.age.nativeElement.value=age;

  }

   triggerView(){
    console.log('check 1');
     this.sunilvich?.SayHello();
     console.log('check 2');
   }


}
