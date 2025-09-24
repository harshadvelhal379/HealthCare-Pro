import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  reports = [
    {
      patient: 'John Doe',
      type: 'Blood Test',
      date: '2025-09-20',
      status: 'Completed',
      doctor: 'Dr. Sarah J.'
    },
    {
      patient: 'Emily Smith',
      type: 'X-Ray Chest',
      date: '2025-09-18',
      status: 'Reviewed',
      doctor: 'Dr. Alan K.'
    },
    {
      patient: 'Robert Brown',
      type: 'MRI Brain',
      date: '2025-09-15',
      status: 'Pending',
      doctor: 'Dr. Sarah J.'
    },
    {
      patient: 'Sophia Williams',
      type: 'Urine Test',
      date: '2025-09-12',
      status: 'Completed',
      doctor: 'Dr. Linda M.'
    },
    {
      patient: 'Michael Thompson',
      type: 'CT Scan',
      date: '2025-09-10',
      status: 'In Progress',
      doctor: 'Dr. Alan K.'
    }
  ];
}
