import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mock, MockInterface } from 'src/app/models/mock';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements DoCheck {
  constructor(private route: ActivatedRoute) {}

  id: number = 0;
  person?: MockInterface;

  ngDoCheck() {
    let routeId = this.route.snapshot.paramMap.get('id');
    console.log(
      '🚀 ~ file: detail.component.ts:16 ~ DetailComponent ~ ngDoCheck ~ routeId:',
      routeId
    );
    if (routeId) {
      this.id = +routeId;
      this.person = Mock.filter((x) => x.id == this.id)[0];
      console.log(
        '🚀 ~ file: detail.component.ts:25 ~ DetailComponent ~ ngDoCheck ~ this.person:',
        this.person
      );
    }
  }
}
