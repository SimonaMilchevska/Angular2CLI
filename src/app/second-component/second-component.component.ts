import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../data-service.service";

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

  localToken: string;
  constructor(private svc: DataServiceService) { }

  ngOnInit() {
    console.log("second component works");
    this.localToken = this.svc.retrieve();

    console.log("token " + this.localToken);
  }

}
