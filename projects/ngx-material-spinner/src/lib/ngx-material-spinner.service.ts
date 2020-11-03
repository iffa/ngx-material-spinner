import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { filter, map, takeUntil, toArray } from 'rxjs/operators';

export const PRIMARY_SPINNER = 'primary';

export interface NgxMaterialSpinnerConfig {
  name: string;

  show: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class NgxMaterialSpinnerService {
  spinnerSubject = new BehaviorSubject<NgxMaterialSpinnerConfig>(null);

  /**
   * Get desired spinner instance observable. Emits whenever the spinner is shown or hidden.
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
  show(name: string = PRIMARY_SPINNER): Promise<void> {
    return new Promise((resolve) => {
      this.spinnerSubject.next({ name, show: true });
      resolve();
    });
  }

  /**
   * Shows the spinner only if the spinner is not hidden within the given debounce time.
   *
   * Ideal for operations that are known to be (usually) short in nature, where a spinner is only needed if the operation
   * takes longer than expected.
   *
   * @param name Spinner to show (name)
   * @param debounce Time to wait before showing spinner
   */
  showDebounced(name: string = PRIMARY_SPINNER, debounce: number = 250): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.getSpinner(name)
        .pipe(
          takeUntil(timer(debounce)),
          toArray(),
          map((spinner) => {
            // don't show spinner because it was already hidden
            if (spinner.find((x) => x.show === false)) {
              return false;
            }
            this.spinnerSubject.next({ name, show: true });
            return true;
          })
        )
        .subscribe((shown) => {
          resolve(shown);
        });
    });
  }

  /**
   * Hide spinner, with optional debounce.
   * @param name Spinner to hide
   * @param debounce Debounce in ms, default to 0
   */
  hide(name: string = PRIMARY_SPINNER, debounce: number = 0): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.spinnerSubject.next({ name, show: false });
        resolve();
      }, debounce);
    });
  }
}
