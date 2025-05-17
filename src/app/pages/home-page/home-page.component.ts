import { Component, inject, signal } from '@angular/core';
import { DpDatePickerModule } from 'ng2-date-picker';
import { HotelListComponent } from "../../components/hotel-list/hotel-list.component";
import { SearchBoxSidebarComponent } from "../../components/search-box-sidebar/search-box-sidebar.component";
import { HotelService } from '../../services/hotel.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Hotel } from '../../interfaces/hotel.interface';

@Component({
  imports: [DpDatePickerModule, HotelListComponent, SearchBoxSidebarComponent, ReactiveFormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  private hotelService = inject(HotelService);
  private fb = inject(FormBuilder);

  hotels = signal<Hotel[]>([]);

  public myForm = this.fb.group({
    checkInDate: ['', Validators.required],
    checkOutDate: ['', Validators.required],
    cityId: [null, Validators.required],
    guests: [0],
  });

  loadHotels() {
    const { checkInDate, checkOutDate, cityId } = this.myForm.value;

    this.hotelService.getHotels(checkInDate!, checkOutDate!, cityId!).subscribe(response => {
      this.hotels.set(response);
    });

  }

  datePickerConfig = {
    format: 'YYYY-MM-DD',
    minYear: 2000,
    maxYear: 2030,
    showWeekNumbers: false,
    closeOnDateSelection: true,
    dateInputFormat: 'YYYY-MM-DD',
    displayFormat: 'YYYY-MM-DD',
    showDropdowns: true,
    showTodayButton: true,
    todayButtonLabel: 'Today',
  }

}
