import { createComponentFactory, createHostFactory, Spectator } from '@ngneat/spectator';
import { NgxMaterialSpinnerComponent } from './ngx-material-spinner.component';
import { NgxMaterialSpinnerService } from './ngx-material-spinner.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SpectatorOptions } from '@ngneat/spectator/lib/spectator/options';

describe('NgxMaterialSpinnerComponent', function () {
  let spectator: Spectator<NgxMaterialSpinnerComponent>;
  const componentOptions: SpectatorOptions<NgxMaterialSpinnerComponent> = {
    component: NgxMaterialSpinnerComponent,
    imports: [NoopAnimationsModule, MatProgressSpinnerModule],
    providers: [NgxMaterialSpinnerService],
  };
  const createComponent = createComponentFactory(componentOptions);
  const createHost = createHostFactory(componentOptions);

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

  it('should display custom content', () => {
    spectator = createHost('<ngx-material-spinner>This is custom content</ngx-material-spinner>');

    spectator.inject(NgxMaterialSpinnerService).show();

    spectator.detectChanges();

    expect(spectator.query('#spinner-custom-content')).toHaveText('This is custom content');
  });
});
