import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-event',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-event.component.html',
  styleUrl: './lifecycle-event.component.css'
})
export class LifecycleEventComponent {

  testVariable: string = '';
  constructor() {
    console.log('This is constructor');
  }
  ngOnInit() {
    console.log('This is ngOnInit');
    this.testVariable = 'This is ngOnChanges';
  }
  ngOnChanges() {
    console.log('This is ngOnChanges');
  }

  ngDoCheck() {
    console.log('This is ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('This is ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('This is ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('This is ngAfterViewInit');
  }
  ngOnDestroy() {
    console.log('This is ngOnDestroy');
  }

}
