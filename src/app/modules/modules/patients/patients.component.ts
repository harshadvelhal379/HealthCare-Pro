import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements OnInit {
  searchTerm: string = '';

  patients = [
    { name: 'John Doe', age: 34, gender: 'Male', contact: '555-1234', lastVisit: '2023-08-15' },
    { name: 'Jane Smith', age: 28, gender: 'Female', contact: '555-5678', lastVisit: '2023-07-20' },
    { name: 'Michael Brown', age: 42, gender: 'Male', contact: '555-8765', lastVisit: '2023-06-10' },
    { name: 'Emily Davis', age: 30, gender: 'Female', contact: '555-4321', lastVisit: '2023-09-01' },
    { name: 'Chris Wilson', age: 50, gender: 'Male', contact: '555-9876', lastVisit: '2023-05-18' },
    { name: 'Laura Johnson', age: 26, gender: 'Female', contact: '555-6543', lastVisit: '2023-08-25' },
    { name: 'David Lee', age: 38, gender: 'Male', contact: '555-3210', lastVisit: '2023-07-30' },
    { name: 'Sarah Martinez', age: 45, gender: 'Female', contact: '555-7890', lastVisit: '2023-08-12' },
    { name: 'James Anderson', age: 33, gender: 'Male', contact: '555-2345', lastVisit: '2023-06-29' },
    { name: 'Olivia Thomas', age: 29, gender: 'Female', contact: '555-6789', lastVisit: '2023-09-05' }
  ];

  filteredPatients = [...this.patients];

  ngOnInit() {
    this.filterPatients(); // Initialize filtered list
  }

  filterPatients() {
    const term = this.searchTerm.toLowerCase().trim();

    if (!term) {
      this.filteredPatients = [...this.patients];
      return;
    }

    this.filteredPatients = this.patients.filter(patient =>
      patient.name.toLowerCase().includes(term) ||
      patient.gender.toLowerCase().includes(term) ||
      patient.contact.toLowerCase().includes(term)
    );
  }

  encodeName(name: string): string {
    return encodeURIComponent(name);
  }
}
