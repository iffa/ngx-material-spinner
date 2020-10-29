import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {NgxMaterialSpinnerComponent} from './ngx-material-spinner.component';
import {NgxMaterialSpinnerService} from './ngx-material-spinner.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('NgxMaterialSpinnerComponent', function () {
  let spectator: Spectator<NgxMaterialSpinnerComponent>;
  const createComponent = createComponentFactory({
    component: NgxMaterialSpinnerComponent,
    imports: [
      NoopAnimationsModule,
      MatProgressSpinnerModule
    ],
    providers: [
      NgxMaterialSpinnerService
    ]
  });

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });

  it('overlay invisible in default component state', () => {
    spectator = createComponent();

    expect(spectator.query('.overlay')).toBeFalsy();
  });

  it('overlay shown when service.show is called', () => {
    spectator = createComponent();

    spectator.inject(NgxMaterialSpinnerService).show();

    spectator.detectChanges();

    expect(spectator.query('.overlay')).toBeTruthy();
  });
});
