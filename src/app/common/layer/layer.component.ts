import { Component, OnInit, Input } from '@angular/core';
import { System } from '../shared/models/system';
import { Layer } from '../shared/models/layer';

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.css']
})
export class LayerComponent implements OnInit {

  @Input('layer')
  layer: Layer;
  systems: System[] = [];
  constructor() { }

  ngOnInit() {
    this.systems = this.layer.systems;
  }

}
