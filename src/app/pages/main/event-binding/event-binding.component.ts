import { Component, HostListener, Renderer2 } from '@angular/core';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss'],
})
export class EventBindingComponent {
  //init the event listener just like react useeffect and destroy it afterward
  listener;

  constructor(private renderer2: Renderer2) {
    this.listener = this.renderer2.listen('window', 'wheel', (e) => {
      console.log(this.getYPosition(e));
      console.log(e);
    });
  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }
  ngOnDestroy(): void {
    this.listener();
  }
}
