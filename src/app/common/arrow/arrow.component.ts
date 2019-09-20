import { Component, OnInit, Input } from '@angular/core';
import { Arrow, ArrowTypes, ArrowDirection } from '../shared/models/arrow';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.css']
})
export class ArrowComponent implements OnInit {

  @Input('arrow')
  arrow: Arrow;

  //imageSrc = 'assets/images/arrow-top-down-dual.png';
  constructor() { }

  ngOnInit() {
  }

  get imageSrc(): string {
    let imageSrc = '';
    if (!this.arrow)
      imageSrc = '';
    else if (this.arrow && this.arrow.imageSrc) {
      imageSrc = this.arrow.imageSrc;
    }
    else {
      //console.log(this.arrow);

      if (this.arrow.arrowType == ArrowTypes.VAL) {

        if (this.arrow.arrowDirection == ArrowDirection.UP)
          imageSrc = 'assets/images/arrow-top-value.png';
        else if (this.arrow.arrowDirection == ArrowDirection.DOWN)
          imageSrc = 'assets/images/arrow-down-value.png';
        else if (this.arrow.arrowDirection == ArrowDirection.BOTH)
          imageSrc = 'assets/images/arrow-top-down-dual-value.png';
      }
      else if (this.arrow.arrowType == ArrowTypes.NOVAL) {
        if (this.arrow.arrowDirection == ArrowDirection.UP)
          imageSrc = 'assets/images/arrow-top.png';
        else if (this.arrow.arrowDirection == ArrowDirection.DOWN)
          imageSrc = 'assets/images/arrow-down.png';
        else if (this.arrow.arrowDirection == ArrowDirection.BOTH)
          imageSrc = 'assets/images/arrow-top-down-dual.png';
      }
      else {
        imageSrc = 'assets/images/arrow-top-down-dual.png';
      }
      //console.log({ imageSrc });
    }
    return imageSrc;
  }


  setClasses() {
    let classes = {
      "all-arrow": true,
      "mx-auto": true,
      "d-block": true
    };
    return classes;
  }
}
