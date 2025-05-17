import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../interfaces/hotel.interface';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private apiBaseUrl: string = environment.apiBaseUrl;

  private http = inject(HttpClient);

  getHotels(checkInDate: string, checkOutDate: string, cityId: number) {
    return this.http.get<Hotel[]>(`${this.apiBaseUrl}/hotels/available`, {
      params: {
        checkInDate,
        checkOutDate,
        cityId: cityId,
      }
    });
  }
}
