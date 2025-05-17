import { Component } from '@angular/core';
import { DpDatePickerModule } from 'ng2-date-picker';
import { HotelListComponent } from "../../components/hotel-list/hotel-list.component";
import { SearchBoxSidebarComponent } from "../../components/search-box-sidebar/search-box-sidebar.component";

@Component({
  imports: [DpDatePickerModule, HotelListComponent, SearchBoxSidebarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

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
