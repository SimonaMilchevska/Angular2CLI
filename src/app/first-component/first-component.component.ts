import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../data-service.service";

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
	localToken: string;
  constructor(private svc: DataServiceService) { }

  ngOnInit() {
    this.svc.save("000000");
	this.localToken = this.svc.retrieve();
  }

}
