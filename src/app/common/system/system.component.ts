import { Component, OnInit, Input } from '@angular/core';
import { System } from '../shared/models/system';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  @Input('system')
  system: System;

  constructor() { }

  ngOnInit() {
  }

}
