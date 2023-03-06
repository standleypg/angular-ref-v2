import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-component-communication',
  templateUrl: './component-communication.component.html',
  styleUrls: ['./component-communication.component.scss'],
})
export class ComponentCommunicationComponent {
  messageFromChild: string | undefined;
  @ViewChild(ChildComponent) viewChild: any;

  receiveMessageFromChild(message: string) {
    this.messageFromChild = message;
  }

  alertFromChild() {
    this.viewChild.alertFromChild();
  }

  alertViewMessageFromChild() {
    alert(this.viewChild.viewChildMessage);
  }
}
