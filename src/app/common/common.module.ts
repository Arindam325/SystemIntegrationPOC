import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SystemComponent } from './system/system.component';
import { LayerComponent } from './layer/layer.component';
import { ArrowComponent } from './arrow/arrow.component';




@NgModule({
  declarations: [SystemComponent, LayerComponent, ArrowComponent],
  imports: [
    BrowserModule, HttpClientModule
  ],
  exports: [SystemComponent, LayerComponent]
})
export class CommonModule { }
