import { Component } from '@angular/core';

interface Appointment {
  patient: string;
  date: string;
  time: string;
  status: string;
  doctor: string;
}

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {
  appointments: Appointment[] = [
    {
      patient: 'John Doe',
      date: '2025-09-25',
      time: '10:00 AM',
      status: 'Confirmed',
      doctor: 'Dr. Smith'
    },
    {
      patient: 'Alice Johnson',
      date: '2025-09-26',
      time: '11:30 AM',
      status: 'Pending',
      doctor: 'Dr. Adams'
    },
    {
      patient: 'Michael Brown',
      date: '2025-09-27',
      time: '2:00 PM',
      status: 'Cancelled',
      doctor: 'Dr. Taylor'
    },
    {
      patient: 'Sophia Williams',
      date: '2025-09-28',
      time: '3:15 PM',
      status: 'Confirmed',
      doctor: 'Dr. Garcia'
    },
    {
      patient: 'David Lee',
      date: '2025-09-29',
      time: '9:45 AM',
      status: 'Pending',
      doctor: 'Dr. Johnson'
    }
  ];

  sortColumn: keyof Appointment | '' = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  sortData(column: keyof Appointment) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.appointments.sort((a, b) => {
      const valA = a[column]?.toLowerCase?.() || '';
      const valB = b[column]?.toLowerCase?.() || '';

      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  getSortIcon(column: keyof Appointment): string {
    if (this.sortColumn !== column) return 'text-muted fa-sort';
    return this.sortDirection === 'asc' ? 'fa-sort-up text-primary' : 'fa-sort-down text-primary';
  }
}
