import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dialog: MatDialog) {}

  onSettings() {
    this.dialog.open(SettingsComponent, {
      width: '90%',
      maxWidth: '670px',
      height: '500px',
      panelClass: 'settings-dialog',
      disableClose: false
    });
  }

  onLogout() {
    console.log('Logout clicked');
  }
}
