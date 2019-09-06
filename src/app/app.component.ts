import { Component, OnInit } from '@angular/core';
import { Layer } from './common/shared/models/layer';
import { System } from './common/shared/models/system';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EPZDashboardPOC';
  layers: Layer[] = [];

  constructor() { }

  ngOnInit() {
    this.layers = [
      new Layer('Application Layer', 1, [
        new System('ALS'),
        new System('LQM'),
        new System('OLS'),
        new System('FNI')
      ]),
      new Layer('Middleware Layer', 2, [
        new System('ESB'),
        new System('ESB'),
        new System('ESB'),
        new System('ESB')
      ]),
      new Layer('EPH Layer', 3, [
        new System('EPH', 'M')
      ])

    ];
  }
}
