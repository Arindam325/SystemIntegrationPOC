import { Component, OnInit } from '@angular/core';
import { Layer } from './common/shared/models/layer';
import { System } from './common/shared/models/system';
import { Arrow, ArrowDirection, ArrowTypes } from './common/shared/models/arrow';
import { LayerService } from './common/shared/services/layer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EPZDashboardPOC';
  layers: Layer[] = [];

  constructor(private layerService: LayerService) {

  }

  ngOnInit() {
    this.layerService.getLayerData().subscribe(v => {
      this.layers = v;
    });

    console.log(this.layers);
  }
}
