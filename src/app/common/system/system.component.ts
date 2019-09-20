import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { System } from '../shared/models/system';
import { SystemDetailsService } from '../shared/services/system-details.service';


@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  @Input('system')
  system: System;
  @Output('systemDetails')
  emitter = new EventEmitter<System>();

  systemDetailsShow: boolean = false;

  constructor(private systemDetailsService: SystemDetailsService) { }

  ngOnInit() {
    this.systemDetailsService.systemDetailsVisibility.subscribe(v => { this.systemDetailsShow = v; });
  }

  showDetails() {
    //console.log('show some system details', this.system);
    let systemDetailsShow = !this.systemDetailsShow;
    this.systemDetailsService.changeSystemDetailsVisibility(systemDetailsShow);
    if (systemDetailsShow)
      this.emitter.emit(this.system);
  }

  setClasses() {
    let classes = {
      "btn-block": (this.system.type == 'M'),
      "main-system": (this.system.type == 'M'),
      "all-btn": true
    };
    return classes;
  }
}
