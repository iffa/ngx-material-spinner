import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { NgxMaterialSpinnerService, PRIMARY_SPINNER } from './ngx-material-spinner.service';

describe('NgxMaterialSpinnerService', function () {
  let spectator: SpectatorService<NgxMaterialSpinnerService>;
  const createService = createServiceFactory(NgxMaterialSpinnerService);

  it('should create', () => {
    spectator = createService();

    expect(spectator.service).toBeTruthy();
  });

  it('show emits to spinner subject', async () => {
    spectator = createService();

    await spectator.service.show();

    expect(spectator.service.spinnerSubject.getValue().name).toEqual(PRIMARY_SPINNER);
    expect(spectator.service.spinnerSubject.getValue().show).toEqual(true);
  });

  it('hide emits to spinner subject', async () => {
    spectator = createService();

    await spectator.service.hide();

    expect(spectator.service.spinnerSubject.getValue().name).toEqual(PRIMARY_SPINNER);
    expect(spectator.service.spinnerSubject.getValue().show).toEqual(false);
  });

  it('getSpinner returns correct instance', async (done) => {
    spectator = createService();

    spectator.service.getSpinner('spinner2').subscribe((spinner) => {
      expect(spinner.name).toEqual('spinner2');
      expect(spinner.show).toEqual(true);
      done();
    });

    await spectator.service.show('spinner1');
    await spectator.service.show('spinner2');
  });

  it('show and hide respect custom spinner instance name', async () => {
    spectator = createService();

    await spectator.service.show('custom_name');

    expect(spectator.service.spinnerSubject.getValue().name).toEqual('custom_name');
    expect(spectator.service.spinnerSubject.getValue().show).toEqual(true);

    await spectator.service.hide('custom_name');

    expect(spectator.service.spinnerSubject.getValue().name).toEqual('custom_name');
    expect(spectator.service.spinnerSubject.getValue().show).toEqual(false);
  });

  it('showDebounced shows spinner after debounce (no hide call)', async (done) => {
    spectator = createService();

    spectator.service.showDebounced().then((shown) => {
      expect(shown).toEqual(true);
      done();
    });
  });

  it('showDebounced doesnt show spinner after debounce (had hide call)', async (done) => {
    spectator = createService();

    spectator.service.showDebounced().then((shown) => {
      expect(shown).toEqual(false);
      done();
    });

    await spectator.service.hide();
  });
});
