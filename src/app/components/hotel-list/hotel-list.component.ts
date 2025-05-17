import { Component, input } from '@angular/core';
import { Hotel } from '../../interfaces/hotel.interface';

@Component({
  selector: 'app-hotel-list',
  imports: [],
  templateUrl: './hotel-list.component.html',
  styles: ``
})
export class HotelListComponent {

  hotels = input<Hotel[]>([]);

}
