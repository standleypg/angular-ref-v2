import { Component, ElementRef, Renderer2 } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent {
  constructor(
    private logService: LogService,
    private renderer: Renderer2,
    private host: ElementRef
  ) {}

  handleLogOnClick() {
    this.logService.logMessage('this is log on ' + new Date());
  }

  changeColor() {
    this.renderer.setStyle(this.host.nativeElement, 'color', 'red');
  }
}
