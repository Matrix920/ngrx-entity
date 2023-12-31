import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCar } from './car.selectors';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent {
  car$ = this.store.select(selectCar);

  constructor(private store: Store) {}
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/