import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemDetailsService {

  private systemDetailsSource = new BehaviorSubject(false);
  systemDetailsVisibility = this.systemDetailsSource.asObservable();

  constructor() { }

  changeSystemDetailsVisibility(visibility: boolean) {
    this.systemDetailsSource.next(visibility);
  }
}
