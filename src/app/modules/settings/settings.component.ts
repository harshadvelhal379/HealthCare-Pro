import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'; // or your modal handler

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  constructor(public dialogRef: MatDialogRef<SettingsComponent>) {}

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    // TODO: Save logic, including password validation
    console.log('Settings saved');
    this.dialogRef.close();
  }
}
