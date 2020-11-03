import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgxMaterialSpinnerService, PRIMARY_SPINNER } from './ngx-material-spinner.service';
import { Observable } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ThemePalette } from '@angular/material/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ngx-material-spinner',
  templateUrl: 'ngx-material-spinner.component.html',
  styleUrls: ['ngx-material-spinner.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate('150ms ease-in')]),
      transition(':leave', animate('150ms ease-in', style({ opacity: 0 }))),
    ]),
  ],
})
export class NgxMaterialSpinnerComponent {
  /**
   * Background color in rgba, defaults to 'rgba(51, 51, 51, 0.8)'
   */
  @Input() backgroundColor = 'rgba(51, 51, 51, 0.8)';

  /**
   * To set spinner color(DEFAULTS.SPINNER_COLOR)
   */
  @Input() color: ThemePalette = 'primary';

  /**
   * Toggle fullscreen mode.
   */
  @Input() fullScreen = true;

  /**
   * Spinner name. Don't forget to use this name when showing or hiding the spinner.
   */
  @Input() name = PRIMARY_SPINNER;

  /**
   * Z-index value, defaults to 99999 for convenience.
   */
  @Input() zIndex = 99999;

  /**
   * Stroke width of the progress spinner, defaults to 8.
   */
  @Input() strokeWidth = 8;

  /**
   * Diameter of the progress spinner, defaults to 96.
   */
  @Input() diameter = 96;

  /**
   * Set to false to disabled fade in animations.
   */
  @Input() animated = true;

  constructor(private spinnerService: NgxMaterialSpinnerService) {}

  shouldShow(): Observable<boolean> {
    return this.spinnerService.getSpinner(this.name).pipe(map((spinner) => spinner.show));
  }
}
