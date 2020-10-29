import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

export const PRIMARY_SPINNER = 'primary';

export interface NgxMaterialSpinnerConfig {
  name: string;

  show: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NgxMaterialSpinnerService {
  spinnerSubject = new BehaviorSubject<NgxMaterialSpinnerConfig>(null);

  /**
   * Get desired spinner instance.
   *
   * @param name Spinner to get
   **/
  getSpinner(name: string): Observable<NgxMaterialSpinnerConfig> {
    return this.spinnerSubject.asObservable().pipe(filter((x) => x && x.name === name));
  }

  /**
   * Show spinner.
   *
   * @param name Spinner to show (name)
   */
  show(name: string = PRIMARY_SPINNER): Promise<boolean> {
    return new Promise((resolve) => {
      this.spinnerSubject.next({name, show: true});
      resolve();
    });
  }

  /**
   * Hide spinner, with optional debounce.
   * @param name Spinner to hide
   * @param debounce Debounce in ms, default to 10
   */
  hide(name: string = PRIMARY_SPINNER, debounce: number = 10): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.spinnerSubject.next({name, show: false});
        resolve(true);
      }, debounce);
    });
  }
}
