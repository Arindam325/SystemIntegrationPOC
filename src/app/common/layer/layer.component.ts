import { Component, OnInit, Input } from '@angular/core';
import { System } from '../shared/models/system';
import { Layer } from '../shared/models/layer';
import { Arrow } from '../shared/models/arrow';
import { SystemDetailsService } from '../shared/services/system-details.service';

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.css']
})
export class LayerComponent implements OnInit {

  @Input('layer')
  layer: Layer;

  systems: System[] = [];
  arrows: Arrow[] = [];

  system: System;
  showSystemDetails: boolean = false;

  constructor(private systemDetailsService: SystemDetailsService) { }

  ngOnInit() {
    this.systems = this.layer.systems;
    this.arrows = this.layer.arrows;
    this.systemDetailsService.systemDetailsVisibility.subscribe(v => { this.showSystemDetails = v; });
  }

  showDetails(system) {
    console.log('show details', system);
    this.system = system;
    //this.showSystemDetails = true;
  }
  closeSystemDetails() {
    this.system = undefined;
    this.systemDetailsService.changeSystemDetailsVisibility(false);
  }

  setClassesArrow(arrow) {
    let classes = {
      "img-container": (arrow.arrowType == 'VAL'),
      "col-sm-1": (this.arrows.length > 1),
      "col": (this.arrows.length == 1),
      "text-center": true
    };
    return classes;
  }
  setClassesSystem() {
    let classes = {
      "col-sm-1": (this.systems.length > 1),
      "col": (this.systems.length == 1),
      "text-center": true
    };
    return classes;
  }

}
