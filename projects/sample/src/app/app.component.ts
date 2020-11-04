import { Component, HostListener } from '@angular/core';
import { NgxMaterialSpinnerService } from 'ngx-material-spinner';

const TABLET_SIZE = 768;
const MOBILE_SIZE = 425;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  spinnerConfig = {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    fullScreen: true,
  };

  noOfColumns = 3;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const deviceWidth = event.target.innerWidth;
    if (deviceWidth <= MOBILE_SIZE) {
      this.noOfColumns = 1;
    } else if (deviceWidth <= TABLET_SIZE) {
      this.noOfColumns = 2;
    }
  }

  constructor(private spinner: NgxMaterialSpinnerService) {
    const deviceWidth = window.innerWidth;
    if (deviceWidth <= MOBILE_SIZE) {
      this.noOfColumns = 1;
    } else if (deviceWidth <= TABLET_SIZE) {
      this.noOfColumns = 2;
    }
  }

  showSpinner(name: string) {
    this.spinner.show(name);
    this.spinner.hide(name, 3000);
  }

  setFullscreenMode() {
    this.spinnerConfig['fullScreen'] = !this.spinnerConfig['fullScreen'];
  }
}
