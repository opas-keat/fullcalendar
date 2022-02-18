import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fullcalendar';
  calendarOptions: CalendarOptions = {
    schedulerLicenseKey: "GPL-My-Project-Is-Open-Source",
    initialView: 'resourceTimelineDay',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    locale: "th",
    headerToolbar: {
      left: 'today prev,next',
      center: 'title',
      right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth',

    },
    buttonText: {
      prev: "ก่อนหน้า",
      next: "ถัดไป",
      prevYear: "ปีก่อนหน้า",
      nextYear: "ปีถัดไป",
      year: "ปี",
      today: "วันนี้",
      month: "เดือน",
      week: "สัปดาห์",
      day: "วัน",
      list: "กำหนดการ"
    },
    weekText: "สัปดาห์",
    allDayText: "ตลอดวัน",
    moreLinkText: "เพิ่มเติม",
    noEventsText: "ไม่มีกิจกรรมที่จะแสดง",
    aspectRatio: 1.5,
    resourceAreaColumns: [
      {
        field: 'title',
        headerContent: 'ชื่อห้องประชุม'
      },
      // {
      //   field: 'occupancy',
      //   headerContent: 'สถานะ'
      // }
    ],
    resources: [
      {
        id: '1',
        title: 'ห้องประชุม 1',
      },
      {
        id: '2',
        title: 'ห้องประชุม 2',
      }
    ],
    slotMinTime: "08:00:00",
    slotMaxTime: "16:00:00",
    eventTimeFormat: { // like '14:30:00'
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    },
    events: [
      {
        resourceIds: ['1',], title: 'ประชุมตรวจรับ 1', start: '2022-02-08T08:00:00',
        allDay: false
      },
      { resourceIds: ['2',], title: 'ประชุม 2', date: '2022-02-08T09:30:00' }
    ]
  };

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }
}
