import { NgModule } from '@angular/core';
import { SystemComponent } from './system/system.component';
import { LayerComponent } from './layer/layer.component';
import { BrowserModule } from '@angular/platform-browser';
import { ArrowComponent } from './arrow/arrow.component';




@NgModule({
  declarations: [SystemComponent, LayerComponent, ArrowComponent],
  imports: [
    BrowserModule
  ],
  exports: [SystemComponent, LayerComponent]
})
export class CommonModule { }
