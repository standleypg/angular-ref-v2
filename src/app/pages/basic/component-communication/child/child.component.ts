import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() message!: string;
  @Output() messageEvent: EventEmitter<string> = new EventEmitter<string>();
  messageFromChild = 'Message from child to parent!';
  viewChildMessage = 'Message from child using ViewChild method';
  sendMessage() {
    this.messageEvent.emit(this.messageFromChild);
  }

  alertFromChild() {
    alert('This is an alert from child triggering from parent');
  }
}
