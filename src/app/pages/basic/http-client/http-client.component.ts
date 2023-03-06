import { Component, OnInit } from '@angular/core';
import { Lotr } from 'src/app/models/lotr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss'],
})
export class HttpClientComponent implements OnInit {
  constructor(private dataService: DataService) {}
  result?: Lotr;

  ngOnInit(): void {
    this.dataService.getData().subscribe((res) => {
      console.log(res);
      this.result=res;
    });
  }
}
